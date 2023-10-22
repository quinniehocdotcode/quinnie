const createFooter = ()=>{
    let footer = document.querySelector('footer');
    footer.innerHTML=`
    <div class="footer-content">
                <img src="png/logo.png" class ="logo" alt="">
                <div class="footer-ul-container">
                    <ul class="category">
                        <li class="category-title">Men</li>
                        <li><a href="a" class="footer-link">t-shirts</a></li>
                        <li><a href="a" class="footer-link">sweater</a></li>
                        <li><a href="a" class="footer-link">shirts</a></li>
                        <li><a href="a" class="footer-link">jeans</a></li>
                        <li><a href="a" class="footer-link">trouser</a></li>
                        <li><a href="a" class="footer-link">shoes</a></li>
                        <li><a href="a" class="footer-link">course</a></li>
                        <li><a href="a" class="footer-link">sports</a></li>
                        <li><a href="a" class="footer-link">watchs</a></li>
                    </ul>
                    <ul class="category">
                        <li class="category-title">Women</li>
                        <li><a href="a" class="footer-link">t-shirts</a></li>
                        <li><a href="a" class="footer-link">sweater</a></li>
                        <li><a href="a" class="footer-link">shirts</a></li>
                        <li><a href="a" class="footer-link">jeans</a></li>
                        <li><a href="a" class="footer-link">trouser</a></li>
                        <li><a href="a" class="footer-link">shoes</a></li>
                        <li><a href="a" class="footer-link">course</a></li>
                        <li><a href="a" class="footer-link">sports</a></li>
                        <li><a href="a" class="footer-link">watchs</a></li>
                    </ul>

                </div>

            </div>
            
            <p class="footer-tile">about company</p>
            <p class="info">Dù nhiều ngân hàng than thừa tiền không thể cho vay, khảo sát của
            VietNamNet tại các phòng giao dịch tại Hà Nội, nhà băng vẫn tung chiêu hút tiền,
            thậm chí khách chỉ gửi 100 triệu đồng đã được ưu đãi lãi suất cao hơn hẳn công bố.
            </p>
            <p class="info">support emails - help@clothing.com,
                customersupport@clothing.com
            </p>
            <p class="info">telephone - 19999 0000 00000 00002</p>
            <div class="footer-social-container">
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">private</a>
                </div>
                <div>
                    <a href="#" class="social-link">terms & services</a>
                    <a href="#" class="social-link">terms & services</a>
                </div>
            </div>
            <p class="footer-credit">Clothing, Best apprels online store</p>
    `;
}
createFooter();