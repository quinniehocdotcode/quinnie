const createNav = ()=>{
    let nav = document.querySelector('.navbar');
    nav.innerHTML=`
            <div class="nav">
                <img src="png/logo.png" class="brand-logo" alt="">
                <div class="nav-items">
                    <div class="search">
                        <input type="text" class="search-box" placeholder="Find in here">
                        <button class="search-btn">search</button>
                    </div>
                    <a href=""><img src="png/cart.jpg" alt=""></a>
                    <a href=""><img src="png/user.png" alt=""></a>

                </div>
                
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="" class="link">Home</a></li>
                <li class="link-item"><a href="" class="link">Women</a></li>
                <li class="link-item"><a href="" class="link">Men</a></li>
                <li class="link-item"><a href="" class="link">Kids</a></li>
                <li class="link-item"><a href="" class="link">Accessories</a></li>
            </ul>
    `;
}
createNav();