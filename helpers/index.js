export const dateFormater = date => {
     const formatedDate = new Date(date)

     const config = {
         year: 'numeric',
         month: 'long',
         day: '2-digit'
     }

     return formatedDate.toLocaleDateString('es-MX', config)
}