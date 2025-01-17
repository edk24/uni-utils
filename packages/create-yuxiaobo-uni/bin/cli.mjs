#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import chalk from 'chalk';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// 将 fs 方法转换为 Promise
const copyFile = promisify(fs.copyFile);
const readdir = promisify(fs.readdir);
const mkdir = promisify(fs.mkdir);

// 获取用户输入的项目名称
const projectName = process.argv[2];

if (!projectName) {
  console.error(chalk.red('请提供项目名称！'));
  console.log(chalk.blue('用法: pnpm create yuxiaobo-uni <项目名称>'));
  process.exit(1);
}

// 模板目录
const templateDir = path.join(__dirname, '../project-template');

// 目标目录
const targetDir = path.join(process.cwd(), projectName);

// 检查目录是否已存在
if (fs.existsSync(targetDir)) {
  console.error(chalk.red(`目录 "${projectName}" 已存在！`));
  process.exit(1);
}

// 复制目录内容
async function copyTemplate(src, dest) {
  try {
    // 创建目标目录
    await mkdir(dest, { recursive: true });

    // 读取模板目录内容
    const files = await readdir(src);

    // 复制每个文件
    for (const file of files) {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      const stat = fs.statSync(srcFile);

      if (stat.isDirectory()) {
        // 如果是目录，递归复制
        await copyTemplate(srcFile, destFile);
      } else {
        // 如果是文件，直接复制
        await copyFile(srcFile, destFile);
      }
    }
  } catch (err) {
    console.error(chalk.red('复制模板文件失败：', err));
    process.exit(1);
  }
}

// 启动复制过程
copyTemplate(templateDir, targetDir).then(() => {
  console.log(chalk.blue(`项目已创建在：${targetDir}`));
  console.log(chalk.green('模板文件复制完成！'));
});