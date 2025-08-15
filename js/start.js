Swal.fire
(
    {  
    title: "<p style='color: #f791a9;'>重要公告！！！</p>",
    html: "<img src='https://r2.sakinori.top/3.webp'>",
    footer: "<p style='color: #f791a9;'>დ感谢支持！新网站&存储开发！დ</p>",
    icon: "",  
    allowOutsideClick: false,  
    showConfirmButton: true,  
    showCancelButton: false, 
    confirmButtonText: "看看下一个~",  
    cancelButtonText: "补药！",
    confirmButtonColor: "#f791a9",
    theme: 'dark',
    draggable: true
}
)
.then((result) => 
{
    if (result.isConfirmed)
    {
        Swal.fire
        ({
            title: "<p style='color: #f791a9;'>❤广告点点谢谢喵！♡</p>",  
            html: "<a href='https://adh.quimbadravfryvryc8jlonex.com/yj/40912/va1orubk' target='_blank'><img src='https://r2.sakinori.top/1920x1080%E7%9A%84%E5%89%AF%E6%9C%AC.png'><p>哔咔漫画 最新黄漫每日更新 打开二次元新世界</p></a>",
            footer: "<p style='color: #f791a9;'>დ感谢支持！所有费用将用于网站开销和新网站&存储的开发！დ</p>",
            allowOutsideClick: false,  
            showConfirmButton: true,  
            showCancelButton: false, 
            confirmButtonText: "好的哦~",  
            cancelButtonText: "补药！",
            confirmButtonColor: "#f791a9",
            theme: 'dark',
            draggable: true
        }).then((result) => 
            {
                if (result.isConfirmed)
                {
                    Swal.fire
                    ({
                        title: "<p style='color: #f791a9;'>❤广告点点谢谢喵！♡</p>",   
                        html: "<a href='https://aigirlfriendstudio.com/?ref_id=88f10d5a-aa3a-47a1-b850-94927bf7ba2f' target='_blank'><img src='https://r2.sakinori.top/400x800.gif' width='250' height='500'></a>",
                        footer: "<p style='color: #f791a9;'>დ感谢支持！所有费用将用于网站开销和新网站&存储的开发！დ</p>",
                        allowOutsideClick: false,  
                        showConfirmButton: true,  
                        showCancelButton: false, 
                        confirmButtonText: "看完了哦~",  
                        confirmButtonColor: "#f791a9",
                        theme: 'dark',
                        draggable: true
                    });
                }
            });
    }
})