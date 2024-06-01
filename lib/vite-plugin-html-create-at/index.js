/*
 * @Author: wangwei wwdqq7@qq.com
 * @Date: 2024-06-01 23:28:33
 * @LastEditors: wangwei wwdqq7@qq.com
 * @LastEditTime: 2024-06-02 00:39:41
 * @FilePath: /college-life/lib/vite-plugin-html-create-at/index.js
 * @Description: 记录发布时间信息插件 vite-plugin-html-create-at
 */

import fs from "fs";
import path from "path";

export default () => {
    return {
        name: "html-create-at",

        // transform(src, id) {
        //     console.info(id, '========');
        // },

        // 处理 html 内容
        transformIndexHtml
    };
}

/**
 * 转换index.html文件内容
 *
 * @param {string} html - HTML内容
 * @returns {string} - 转换后的HTML内容
 */
function transformIndexHtml(html) {
    try {
        const content = readContentFromFile();
        const resolvedContent = insertDateTime(content);
        return wrapWithComment(resolvedContent, html);
    } catch (error) {
        handleError(error);
        return html; // 或 throw error;
    }
}

/**
 * 从文件中读取内容
 *
 * @returns {string} - 文件内容
 * @throws {Error} - 读取文件出错时抛出异常
 */
function readContentFromFile() {
    const filePath = path.join(__dirname, "text.txt");
    try {
        return fs.readFileSync(filePath, "utf-8");
    } catch (error) {
        throw new Error('读取版权信息文件出错:', error);
    }
}

/**
 * 插入发布日期和时间到内容中
 *
 * @param {string} content - 原始内容
 * @returns {string} - 插入日期和时间后的内容
 */
function insertDateTime(content) {
    const dateObj = new Date();
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();
    return content.replace(/AAA/g, `${date} ${time}`);
}

/**
 * 将解析后的内容包装在注释中，并附加原始HTML
 *
 * @param {string} resolvedContent - 解析后的内容
 * @param {string} html - 原始HTML内容
 * @returns {string} - 包装后的HTML内容
 */
function wrapWithComment(resolvedContent, html) {
    return `<!-- 
${resolvedContent}

-->
${html}`;
}

/**
 * 处理读取文件时发生的错误
 *
 * @param {Error} error - 错误对象
 */
function handleError(error) {
    console.error('读取版权信息出错:', error);
    // 这里可以添加更多的错误处理逻辑，例如记录日志等
}

