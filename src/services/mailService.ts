import { CONFIG } from '../config.js';
import type { ApplicationData } from '../types.js';

/**
 * 申し込みデータからHTMLメールの本文を生成する
 * @param data ApplicationData
 * @returns HTML文字列
 */
export function createHtmlBody(data: ApplicationData): string {
  const template = HtmlService.createTemplateFromFile(CONFIG.TEMPLATE_FILE);
  
  // オブジェクトのキーと値をテンプレート変数として一括で渡す
  Object.assign(template, data);

  return template.evaluate().getContent();
}

/**
 * 指定された宛先にメールを送信する
 * @param to 宛先メールアドレス
 * @param subject 件名
 * @param htmlBody HTML本文
 */
export function sendEmail(to: string, subject: string, htmlBody: string): void {
  // MailApp.sendEmailをtry-catchで囲むことも可能だが、
  // メインの関数で全体を囲んでいるため、ここではシンプルに実行する
  MailApp.sendEmail({
    to: to,
    subject: subject,
    htmlBody: htmlBody,
  });
}