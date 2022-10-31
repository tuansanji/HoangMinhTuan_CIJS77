/*
1. tạo một object chứa thông tin người dùng. lưu vào local storage
2. xử lí khi thêm tìm xóa sửa
*/


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const USER_TODOLIST = 'sanji_todolist';


const nameValue = $('#namevl')
const phoneValue = $('#phonevl')
const listUsers = $('.infor_users')
const addBtn = $('.btn-add')

const searchBtn = $('.btn-search')
const dlDuplicatesBtn = $('.btn-delete-duplicates')
const deleteBtn = $$('.btn-delete')
const editBtn = $$('.btn-edit')
const searchValue = $('#name-phone')


const app = {
    isfix: false,
    config: JSON.parse(localStorage.getItem(USER_TODOLIST)) || [],
    
    setConfig() {
        localStorage.setItem(USER_TODOLIST, JSON.stringify(this.config.sort((a, b) => (a.name > b.name) ? 1 : -1)))
    },

    render() {
        const htmls = this.config.map((user,index) =>
        `
        <div class="infor_user" data-index = ${index}>
        <div id="user">
          <p class="name"> ${user.name}</p>
          <p class ="numberphone">${user.phone}</p>
        </div>
        <button class="btn btn-edit">SỬA</button>
        <button class="btn btn-delete">XÓA</button>
      </div>
        `
        )
        listUsers.innerHTML = htmls.join('');
    },
    
    handleEvents() {
        // xử lí khi nhập vào ô input
        $$('input').oninput = function(e) {
            console.log(123);
        }
        // xử lí khi thêm và sửa người dùng (add)
        addBtn.onclick = () => {          
                if(nameValue.value && phoneValue.value)
            {
                if(!this.isfix) {
                    let user ={
                        name:nameValue.value,
                        phone:phoneValue.value,
                    }
                    nameValue.value = null
                    phoneValue.value = null
                this.config.push(user)
                let newuser = 
                `
                <div class="infor_user add-show" >
                <div id="user">
                  <p class="name"> ${user.name}</p>
                  <p class ="numberphone">${user.phone}</p>
                </div>
                <button class="btn btn-edit">SỬA</button>
                <button class="btn btn-delete">XÓA</button>
              </div>
                `
                listUsers.insertAdjacentHTML('beforeend', newuser)
                this.setConfig()
                setTimeout(() => this.render(), 1000)
                }
            }
            else{
                alert('Please complete all information!')
            }
        }
        //xử lí khi tìm kiếm người dùng
        searchBtn.onclick = () => {
          if(searchValue.value){
            var searchArr = this.config.filter((item) => 
            item.name.toUpperCase().includes(searchValue.value.toUpperCase()) === true || item.phone.toUpperCase().includes(searchValue.value.toUpperCase()) === true
        )
        let html = searchArr.map((user,index) =>
        `
        <div class="infor_user" data-index = ${index}>
        <div id="user">
          <p class="name">${user.name}</p>
          <p class ="numberphone">${user.phone}</p>
        </div>
        <button class="btn btn-edit">SỬA</button>
        <button class="btn btn-delete">XÓA</button>
      </div>
        `
        )
        if(searchArr.length > 0) {
        listUsers.innerHTML = html.join('');
        }
        else{
            listUsers.innerHTML = `<p> No matching results were found( Không tìm thấy kết quả phù hợp)</p>`
        }
        searchValue.value = null;
          }
          else{
            alert('Please complete information')
          }
        }
        // xử lí khi xóa trường hợp trùng lặp
        dlDuplicatesBtn.onclick = () => {         
              let result = this.config.filter((item1, index1) => {
                return index1 == this.config.findIndex((item2) => {
                  return item1.phone === item2.phone;
                });
              });
            this.config = result;
            this.setConfig();
            this.render();
        }
        
        // xử lí khi xóa và sửa
        listUsers.onclick = (e) => {
            index = e.target.parentElement.dataset.index

           if(e.target.className == 'btn btn-delete'){
            e.target.parentElement.classList.add('delete-show');       
           setTimeout(() => {
            this.config.splice(index, 1)
            this.setConfig()
            this.render()
           },1000)
           }
           else if(e.target.className == 'btn btn-edit'){
            window.scrollTo({
                top: 0,
                behavior: `smooth`
              })
            addBtn.onclick = () => {
                if(this.isfix){
                    console.log(e.target.parentElement);
                e.target.parentElement.classList.add('edit-show');  
                    setTimeout(() => {
                e.target.parentElement.classList.remove('edit-show'); 
                this.setConfig()
                this.render()
                    },1000)
                    addBtn.innerHTML = 'THÊM'
                    this.config[index].name = nameValue.value
                    this.config[index].phone = phoneValue.value
                    this.isfix = false
                    nameValue.value = null
                    phoneValue.value = null
                }
                else{
                    let user ={
                        name:nameValue.value,
                        phone:phoneValue.value,
                    }
                    nameValue.value = null
                    phoneValue.value = null 
                let newuser = 
                `
                <div class="infor_user add-show" >
                <div id="user">
                  <p class="name"> ${user.name}</p>
                  <p class ="numberphone">${user.phone}</p>
                </div>
                <button class="btn btn-edit">SỬA</button>
                <button class="btn btn-delete">XÓA</button>
              </div>
                `
                listUsers.insertAdjacentHTML('beforeend', newuser)
                this.config.push(user)
                this.setConfig()
                }
            }
            nameValue.style.opacity = 1
            phoneValue.style.opacity = 1
            addBtn.innerHTML = 'SỬA'
            let item = e.target.parentElement
            let user = item.querySelector('#user')
            nameValue.value = user.querySelector('p.name').textContent
            phoneValue.value = user.querySelector('p.numberphone').textContent   
            this.isfix = true   
           }

        }
    },

    start() {        
        this.render()
        this.handleEvents()
    }
}

app.start();