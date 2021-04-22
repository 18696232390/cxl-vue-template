import { ref } from 'vue'
import axios from 'axios'

function doGet(url: string) {

  return new Promise((resolve,reject) => { 

    const result = ref(null)
    axios.get(url).then((res) => {
        resolve(res.data)
    }).catch(e => {
      reject(e)
    })

  })

}

export default doGet