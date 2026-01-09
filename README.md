# Graph.js — JavaScript 静态漏洞分析工具

> 基于多版本依赖图 (Multiversion Dependency Graph, MDG) 的高效 JavaScript 静态漏洞检测工具

[![Paper](https://img.shields.io/badge/Paper-ACM%20TOSEM%202024-blue)](https://dl.acm.org/doi/10.1145/3656394)
[![Original Repo](https://img.shields.io/badge/Original-formalsec%2Fgraphjs-green)](https://github.com/formalsec/graphjs)

---

## 项目简介

Graph.js 是一个专门用于分析 npm 包、检测污点风格漏洞和原型污染漏洞的静态分析工具。

### 检测的漏洞类型
| CWE | 漏洞类型 |
|-----|---------|
| CWE-1321 | 原型污染 (Prototype Pollution) |
| CWE-78 | 操作系统命令注入 (OS Command Injection) |
| CWE-94 | 任意代码执行 (Arbitrary Code Execution) |
| CWE-22 | 路径遍历 (Path Traversal) |

### 工作流程
1. **图构建阶段**：构建程序的多版本依赖图 (MDG)，将 AST、CFG、DDG 融合到同一表示中
2. **图查询阶段**：将图导入 Neo4j，执行 Cypher 查询检测漏洞模式

---

## 快速开始

### 方法一：一键脚本

```bash
# 1. 克隆仓库
git clone https://github.com/YOUR_USERNAME/graphjs.git
cd graphjs

# 2. 赋予执行权限并运行
chmod +x one_click.sh
./one_click.sh
```

### 方法二：Docker 运行

```bash
# 1. 构建镜像
docker build -t graphjs .

# 2. 分析文件
./graphjs_docker.sh -i path/to/your/file.js
```

---

## 环境要求

### 本地运行
| 依赖 | 版本要求 |
|------|---------|
| Node.js | v18+ |
| Python | 3.11+ |
| Neo4j | v5 (可选，使用 Docker 时无需) |

### Docker 运行
| 依赖 | 版本要求 |
|------|---------|
| Docker | 20.0+ |
| Python3 | 3.x |

---

## 安装步骤

### 本地安装

```bash
# 1. 安装 Python 依赖并编译 parser
./setup.sh

# 2. 验证安装
python3 graphjs -h
```

### Docker 安装

```bash
# 构建 Docker 镜像（包含 Node.js、Neo4j、Python）
docker build -t graphjs .
```

---

## 使用方法

### 本地运行

```bash
python3 graphjs -f <file_to_analyze> [options]
```

**参数说明：**
| 参数 | 说明 |
|------|------|
| `-f FILE` | 要分析的 JavaScript 文件或目录（必需） |
| `-o OUTPUT` | 输出目录路径 |
| `-s` | 静默模式，不输出图 |
| `-d` | Docker 模式，在 Docker 中运行 Neo4j |
| `-e` | 生成符号测试用例 |

### Docker 运行

```bash
./graphjs_docker.sh -i <path> [options]
```

**参数说明：**
| 参数 | 说明 |
|------|------|
| `-i <path>` | 输入路径（文件或目录，必需） |
| `-o <path>` | 输出目录 |
| `-s` | 静默模式 |
| `-e` | 生成漏洞利用模板 |

### 输出结构

```
graphjs-results/
├── graph/
│   ├── graph_stats.json    # 图统计信息
│   ├── nodes.csv           # 图节点
│   ├── rels.csv            # 图边关系
│   └── normalized.js       # 规范化代码
└── taint_summary.json      # 检测结果
```

---

## 运行测试

### 运行单文件测试

```bash
python3 run_tests.py
```

### 运行多文件测试

```bash
python3 run_multifile_tests.py
```

### 测试集说明

| 目录 | 说明 |
|------|------|
| `tests/input/single_file/` | 单文件测试用例 |
| `tests/expected/` | 预期结果 |
| `test_auto_*` | 自动生成的测试用例 |
| `test_pp_*` | 原型污染测试 |
| `test_inj_*` | 注入测试 |

---

## 项目结构

```
graphjs/
├── graphjs              # 主入口脚本
├── parser/              # MDG 构建代码（TypeScript）
├── detection/           # 漏洞检测查询（Cypher）
├── tests/               # 测试用例
├── docs/                # 文档
├── Dockerfile           # Docker 镜像定义
├── setup.sh             # 本地环境设置
├── one_click.sh         # 一键运行脚本
├── run_tests.py         # 测试运行器
└── requirements.txt     # Python 依赖
```

---

## 引用

如果本项目对您的研究有帮助，请引用原始论文：

```bibtex
@article{ferreira2024graphjs,
  author = {Ferreira, Mafalda and Monteiro, Miguel and Brito, Tiago and Coimbra, Miguel E. and Santos, Nuno and Jia, Limin and Santos, José Fragoso},
  title = {Efficient Static Vulnerability Analysis for JavaScript with Multiversion Dependency Graphs},
  journal = {ACM Transactions on Software Engineering and Methodology},
  year = {2024},
  doi = {10.1145/3656394},
  publisher = {ACM}
}
```

详细引用信息请参阅 [CITATION](./CITATION) 文件。

---

## 相关链接

- **原始论文**: https://dl.acm.org/doi/10.1145/3656394
- **原作者仓库**: https://github.com/formalsec/graphjs
- **VulcaN 数据集**: https://github.com/VulcaN-Study/Supplementary-Material

---

## 许可声明

本仓库仅用于学术研究与学习目的。核心代码版权归原作者所有。

---

## 原作者团队
<table style="width: 80%; margin-left: auto; margin-right: auto;">
  <tr>
    <td style="text-align: center; width: 25%"><img src="https://raw.githubusercontent.com/formalsec/graphjs/main/assets/img/mafalda_ferreira.png" height="100px"/></td>
    <td style="text-align: center; width: 25%"><img src="https://raw.githubusercontent.com/formalsec/graphjs/main/assets/img/jose_fragoso_santos.png" height="100px"/></td>
    <td style="text-align: center; width: 25%"><img src="https://raw.githubusercontent.com/formalsec/graphjs/main/assets/img/filipe_marques.png" height="100px"/></td>
    <td style="text-align: center; width: 25%"><img src="https://raw.githubusercontent.com/formalsec/graphjs/main/assets/img/nuno_santos.jpeg" height="100px"/></td>
  </tr>
  <tr>
    <td style="text-align: center"><a href="https://www.dpss.inesc-id.pt/~mferreira/">Mafalda Ferreira</a></td>
    <td style="text-align: center"><a href="https://web.tecnico.ulisboa.pt/jose.fragoso/#projects">José Fragoso Santos</a></td>
    <td style="text-align: center"><a href="https://www.filipeom.dev/">Filipe Marques</a></td>
    <td style="text-align: center"><a href="https://syssec.dpss.inesc-id.pt/people/Nuno_Santos.html">Nuno Santos</a></td>
  </tr>
</table>

### 合作者
- [Tiago Brito](https://www.dpss.inesc-id.pt/blog/tiago-brito/)
- [Miguel Coimbra](https://www.dpss.inesc-id.pt/~mcoimbra/)
- [Limin Jia](https://www.andrew.cmu.edu/user/liminjia/)
- [Miguel Monteiro](https://www.linkedin.com/in/miguel-monteiro-229b86195/)

---

## 相关研究

### 1. VulcaN 数据集
针对 Node.js 漏洞的静态分析工具实证研究，包含 957 个标注的 npm 漏洞样本。

- **论文**: [IEEE ToR 2023](https://ieeexplore.ieee.org/document/10168679)
- **数据集**: https://github.com/VulcaN-Study/Supplementary-Material

### 2. RuleKeeper
基于 Graph.js 的 GDPR 合规性检测系统。

- **论文**: [IEEE S&P 2023](https://www.computer.org/csdl/proceedings-article/sp/2023/933600b014/1Js0DzhaXNm)
- **代码**: https://github.com/rulekeeper/rulekeeper
