import { CONFIG } from '../config.js';
import type { ApplicationData } from '../types.js';

/**
 * イベントオブジェクトからフォームの回答を解析し、ApplicationDataオブジェクトを生成する
 * @param e イベントオブジェクト
 * @returns ApplicationData | null
 */
export function parseApplicationData(e: GoogleAppsScript.Events.SheetsOnFormSubmit): ApplicationData | null {
  const namedValues = e.namedValues;

  const email = namedValues[CONFIG.FORM_FIELDS.EMAIL]?.[0];
  if (!email) {
    return null; // 返信先がない場合は処理しない
  }

  const now = new Date();

  return {
    email: email,
    participants: namedValues[CONFIG.FORM_FIELDS.PARTICIPANTS]?.[0] || '（未記入）',
    group: namedValues[CONFIG.FORM_FIELDS.GROUP]?.[0] || '個人参加',
    companion: namedValues[CONFIG.FORM_FIELDS.COMPANION]?.[0] || '0',
    opportunity: namedValues[CONFIG.FORM_FIELDS.OPPORTUNITY]?.[0] || '（未記入）',
    comment: namedValues[CONFIG.FORM_FIELDS.COMMENT]?.[0] || '（なし）',
    dateStr: Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy年MM月dd日 HH:mm'),
  };
}