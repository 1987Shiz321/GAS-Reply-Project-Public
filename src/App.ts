import { parseApplicationData } from './services/formService.js';
import { createHtmlBody, sendEmail } from './services/mailService.js';
import { CONFIG } from './config.js';

/**
 * Googleフォーム送信時にトリガーされるメイン関数
 * @param e イベントオブジェクト
 */
export function ReplyEmail(e: GoogleAppsScript.Events.SheetsOnFormSubmit): void {
    try {
        // フォームの回答を解析
        const applicationData = parseApplicationData(e);
        if (!applicationData) {
        console.warn('必須項目が取得できなかったため、処理を中断しました。');
        return;
        }

        // メール本文を生成
        const htmlBody = createHtmlBody(applicationData);

        // メールを送信
        sendEmail(applicationData.email, CONFIG.MAIL.SUBJECT, htmlBody);

        console.log(`メールを ${applicationData.email} に送信`);
    } catch (error) {
        console.error('メール送信処理中に予期せぬエラーが発生しました。', error);
    }
}
