#!/usr/bin/env python3
import subprocess
import json
import os
import shutil
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEST_DIR = os.path.join(BASE_DIR, "tests", "input", "single_file")
EXPECTED_DIR = os.path.join(BASE_DIR, "tests", "expected")
OUTPUT_DIR = os.path.join(BASE_DIR, "test_output_eval")

def run_test(js_file):
    basename = os.path.basename(js_file).replace('.js', '')
    expected_file = f"{EXPECTED_DIR}/single_file_{basename}_taint_summary.json"
    
    # 获取预期检测数量
    try:
        with open(expected_file) as f:
            expected = json.load(f)
            expected_count = len(expected)
    except:
        expected_count = -1
    
    # 运行 graph.js
    output_dir = f"{OUTPUT_DIR}/{basename}"
    if os.path.exists(output_dir):
        shutil.rmtree(output_dir)
    
    cmd = [f"{BASE_DIR}/graphjs", "-f", js_file, "-o", output_dir, "--optimized-import", "-s"]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
    except subprocess.TimeoutExpired:
        return basename, expected_count, -2, "TIMEOUT"
    except Exception as e:
        return basename, expected_count, -3, f"ERROR: {e}"
    
    # 获取实际检测数量
    result_file = f"{output_dir}/taint_summary.json"
    try:
        with open(result_file) as f:
            actual = json.load(f)
            actual_count = len(actual)
    except:
        actual_count = -1
    
    status = "PASS" if expected_count == actual_count else "FAIL"
    return basename, expected_count, actual_count, status

if __name__ == "__main__":
    # 清空输出目录
    if os.path.exists(OUTPUT_DIR):
        shutil.rmtree(OUTPUT_DIR)
    os.makedirs(OUTPUT_DIR)
    
    # 获取所有测试文件
    test_files = sorted([f for f in os.listdir(TEST_DIR) if f.endswith('.js')])
    
    results = []
    passed = 0
    failed = 0
    
    for test_file in test_files:
        full_path = f"{TEST_DIR}/{test_file}"
        name, expected, actual, status = run_test(full_path)
        results.append((name, expected, actual, status))
        
        if status == "PASS":
            passed += 1
        else:
            failed += 1
        
        print(f"{name}: Expected={expected}, Actual={actual} [{status}]")
    
    print(f"\n=== Summary ===")
    print(f"Total: {len(results)}")
    print(f"Passed: {passed}")
    print(f"Failed: {failed}")
    print(f"\nFailed tests:")
    for name, expected, actual, status in results:
        if status != "PASS":
            print(f"  - {name}: Expected={expected}, Actual={actual}")
