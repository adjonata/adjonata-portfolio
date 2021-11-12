import api from '@/plugins/api'
import { Multi } from '@/types'

class ApiService {
  getInformations(): Promise<Multi> {
    return api.get<Multi>('/multi').then((response) => response.data)
  }
}

export default ApiService
