module.exports = {
    admit: function (){
        pdfTemplate({
            template: 'example.pdf',
            output: 'output.pdf',
            data: {
              name: 'John Doe',
              age: 26,
              email: 'johndoe@example.com',
              birthdate: '01/01/1990',
              projects: ['project1', 'project2', 'project3']
            }
          }).then((res) => {
            console.log(res)
          }).catch((err) => {
            console.error(err)
          })
        
        
    }
}