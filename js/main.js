'use strict';
{
    const text = document.querySelector('#text');
    const save = document.querySelector('#save');
    const clear = document.querySelector('#clear');
    const message = document.querySelector('#message');

// ローカルストレージにデータがあるか確認
    if(localStorage.getItem('memo') === null){
        text.value = '';
    }else{
        text.value = localStorage.getItem('memo');
    }

// 入力したテキストをローカルストレージに保存
    save.addEventListener('click', () => {
        message.textContent = 'saved'
        message.classList.add('appear','saved');
        setTimeout(() => {
            message.classList.remove('appear','saved');
        }, 1000);
        localStorage.setItem('memo',text.value);
    });

// ローカルストレージからデータを削除
    clear.addEventListener('click',()=>{
        if(confirm('本当に削除しますか?') === true){
            message.textContent = 'cleared'
            message.classList.add('appear','cleared');
            setTimeout(() => {
                message.classList.remove('appear','cleared');
            }, 1000);
            text.value = '';
            localStorage.removeItem('memo');
        }
    });




}