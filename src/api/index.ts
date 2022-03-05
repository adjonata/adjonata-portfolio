import type { Multi } from '@/types'
import axiosInstance from './axios'

export default {
  async getInformations() {
    const informations = await axiosInstance
      .get<Multi>('/multi')
      .then((response) => response.data)

    return informations
  },
}
