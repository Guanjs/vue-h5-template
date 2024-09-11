import { http } from '@/utils/request';

/**
 * 账号密码登录
 * @returns UseAxiosReturn
 */
export function loginPassword(user_name: string, passwd: string) {
  return http.post(`/api/account/login`, { user_name: user_name, passwd: passwd });
}

/**
 * list数据返回
 * @returns UseAxiosReturn
 */
export function getList(page_num: any, page_size: any) {
  return http.get(`/api/demo/list?page_num=` + page_num + `&page_size=` + page_size);
}
