import request from '@/plugin/axios'

export function GetProjectGroup (data) {
  return request({
    url: '/enegyAnalyse/getProjectGroup',
    method: 'get'
  })
}