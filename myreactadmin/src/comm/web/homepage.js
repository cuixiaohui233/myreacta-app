import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,

} from 'react-router-dom';
import $ from 'jquery';
import './webpage.css';
let logo  = require('./img/logo.gif');
let banner  = require('./img/banner.gif');
// let rabbit = require('./img/p1430226140.webp');
let img1 = require('./img/1.webp');
let img2 = require('./img/2.webp');
let img3 = require('./img/3.webp');
let img4 = require('./img/4.webp');
let img5 = require('./img/5.webp');
let img6 = require('./img/6.webp');
let img7 = require('./img/7.webp');
let img8 = require('./img/8.webp');
// let img5 = require('./img/p2495578250.webp');

class Homepage extends Component{
  constructor(){
    super();
    this.state = {
      hot:[],
      article:[],
      arr:[],
      img:[],
      market:[],
      list:[]
    }
  }
  componentDidMount(){
    // console.log(getItem('img'));
    setTimeout(()=>{
      this.setState({
        article:getItem('article'),
        img:getItem('img'),
        market:getItem('market')
      });
    });
  }
  artClick = (ev)=>{
    // console.log(ev.target.id)
    // $.ajax({
    //   url:'https://api.douban.com/v2/note/'+ev.target.id,
    //   // url:'https://api.douban.com/v2/note/user_created/51610855',
    //   dataType:'jsonp',
    //   success:function(data){
    //     // console.log(data);
    //     // arr1.push(data);
    //   }
    // })
  }
  render(){
    let {img,article,market} = this.state;
    let img1 = Object.assign(img);
    let image = null;
    let image1 = null;
    // console.log(article)
    let article1 = Object.assign(article);
    let art = null;
    let art1 = null;
    let market1 = Object.assign(market);
    let supermarket = null;
    if(article.length){
      localStorage.setItem('article',JSON.stringify(article));
    }
    if(img.length){
      localStorage.setItem('img',JSON.stringify(img));
    }
    if(market.length){
      localStorage.setItem('market',JSON.stringify(market));
    }
    image = img1.map((e,i)=>{
      let data = {
        img:e.img,
        txt:e.title,
        key:i
      }
      if(i <= 3){
        return <dl className="img_dl">
                <dt>
                  <span className="img_span">
                  <Link to="/"><img src={data.img} /></Link>
                  </span>
                </dt>
                <dd>
                  <Link to={'/image/'+data.id}>{data.txt}</Link>
                </dd>
              </dl>
      }
    })
    image1 = img1.map((e,i)=>{
      let data = {
        img:e.img,
        txt:e.title,
        id:e.id,
        key:i
      }
      return <dl className="img_dl">
              <dt>
                <span className="img_span">
                <Link to="/"><img src={data.img} /></Link>
                </span>
              </dt>
              <dd>
                <Link to={'/image/'+data.id}>{data.txt}</Link>
              </dd>
            </dl>
    })
    art = article1.map((e,i)=>{
      return <li
        onClick={this.artClick}
        ><Link to="/" id = {e.id}>{e.title}</Link></li>
    })
    art1 = article1.map((e,i)=>{
      if(i<=4){
        return <div id="author">
          <div className="art_author"><img src={e.avatar} className="art_img"/><span>{e.authorname}</span></div>
          <div className="art_item">
            <p>{e.title}</p>
            <p className="art_txt">{e.summary}</p>
          </div>
        </div>
      }
    })
    supermarket = market1.map((e,i)=>{
      return  <div className="grid-item">
                <div className="product-item" data-id="90190">
                  <div className="p-img">
                    <a href={e.href} target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      <img className="market_img" src={e.img} />
                    </a>
                  </div>
                  <div className="p-title">
                    <a href="https://market.douban.com/item/90190/?r=5&amp;index=6&amp;category=index" target="_blank" title="小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）">
                      小巨蛋T1便携式茶具礼品套装砂岩釉茶盒版（极客黑）
                    </a>
                  </div>
                  <div className="p-brand">
                    <a href="https://market.douban.com/shop/miniteaset/" target="_blank">小巨蛋市集</a>
                  </div>
                  <div className="p-price">
                    <del className="price">736.00</del>
                    <i className="price">368.00</i>
                  </div>
                </div>
              </div>
    })
    return(
      <Router>
      <div className="webpage">
        <div id="web_banner">
          <img src={banner} className="banner_img" />
        </div>
        {/* <div id="advert">
          <a href="https://erebor.douban.com/redirect/?ad=188411&uid=&bid=7qezcFiVg98&unit=dale_anonymous_home_page_middle_2&crtr=3%3A%2F&mark=&hn=hador15&sig=195d8fea5a0bb1593a9f148af49a7a979dc44c4838597db68f4156b03db7be5b5e138753e5db5cc768c84627871a00eebde70ace6324b23f852733ac2807c50c&pid=debug_a51700db43644dfab6c4b68ae301d319106066f8&target=aHR0cHM6Ly9zaGlqaS5kb3ViYW4uY29tL3NwZWNpYWwvcWl4aQ==">
            <img src="https://img1.doubanio.com/view/dale-online/dale_ad/public/3b6c8a1c4e50839.jpg"/>
          </a>
        </div> */}
        <div id="word">
          <h3 className="hot_item">热点内容</h3>
          <div id="img_dl">
            {image}
          </div>
          <div id="img_ul">
            <ul className="img_ul">
            {art}
            </ul>
          </div>
          <div id="img_ll">
            <img className="img_ll_image" src="https://img3.doubanio.com/view/dale-online/dale_ad/public/dd5457bd37cf704.jpg" />
            <div className="img_ll_div">
              <span className="hot_art">热门话题</span>
              <ul className="img_ul" style={paddingleft='10px'}>
                <li><a href="http://www.vikilife.com/150144.html" title="煎饼摊大妈：我月入3万，怎么会少你一个鸡蛋！" rel="bookmark">#煎饼摊大妈：我月入3...</a></li>
                <li><a href="http://www.vikilife.com/150130.html" title="写给女儿：我宁愿你不“善良”" rel="bookmark">#写给女儿：我宁愿你不“善良”</a></li>
                <li><a href="http://www.vikilife.com/149544.html" title="7个养猫小技巧 喜欢喵星人的必看​​" rel="bookmark">#7个养猫小技巧 喜欢喵星人的必看​​</a></li>
                <li><a href="http://www.vikilife.com/149495.html" title="很多花根本不用买，扯几片叶子就能种出一片花园！" rel="bookmark">#很多花根本不用买，扯几片叶...</a></li>
                <li><a href="http://www.vikilife.com/149404.html" title="手工视频教程：好看的鲜花绽放贺卡DIY" rel="bookmark">#手工视频教程：好看的鲜花绽放贺卡DIY</a></li>
                <li><a href="http://www.vikilife.com/149337.html" title="手工diy视频教程：用棉花和空瓶做了一盏云朵灯" rel="bookmark">#手工diy视频教程：用棉花和空瓶做...</a></li>
                <li><a href="http://www.vikilife.com/149247.html" title="夏天喝过这些饮料才叫爽，有哪些好喝的饮料推荐" rel="bookmark">#夏天喝过这些饮料才叫爽，有哪些好...</a></li>
                <li><a href="http://www.vikilife.com/150035.html" title="《战狼2》10句最经典台词，燃爆了！" rel="bookmark">#《战狼2》10句最经典台词，燃爆了！</a></li>
                <li><a href="http://www.vikilife.com/149572.html" title="你的不自律，正在慢慢毁掉你" rel="bookmark">#你的不自律，正在慢慢毁掉你</a></li>
                <li><a href="http://www.vikilife.com/149328.html" title="《摔跤吧，爸爸》：爱你最好的方式，是给你力量" rel="bookmark">#《摔跤吧，爸爸》：爱你最好的方...</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="article">
          <h3 className="hot_item hot_item_add">文章</h3>
          <div id="hot_article">
            <h3><span className="hot_art">热门文章</span>· · · · · · <Link to="/web/read">更多</Link></h3>
            <div className="hot_article_item">{art1}</div>
          </div>
        </div>
        <div id="image">
          <h3 className="hot_item hot_item_add">图集</h3>
          <div id="hot_image">
            <h3><span className="hot_art">热门相册</span>· · · · · · <Link to="/web/image">更多</Link></h3>
            <div className="img_item">{image1}</div>
          </div>
        </div>
        <div id="margit">
          <h3 className="hot_item hot_item_add">市集</h3>
          <div id="hot_margit">
            <h3><span className="hot_art">热门商品</span>· · · · · · <Link to="/">更多</Link></h3>
            <div>{supermarket}</div>
          </div>
        </div>
      </div>
    </Router>
    )
  }
}
function getItem(data){
  let arr = JSON.parse(localStorage.getItem('data')) || [];
  // console.log(arr);
  // let arr1 = Object.assign(arr);
  let list = null;
  list = arr.map((e,i)=>{
    let hhh = {
      title:e.标题,
      authorname:e.作者,
      avatar:e.avatar,
      update_time:e.更新时间,
      summary:e.内容,
      id:e.id
    }
    return hhh;
  })
  // console.log(list);

  let arr1 = JSON.parse(localStorage.getItem('image'))||[];
  let list1 = null;
  list1 = arr1.map((e,i)=>{
    // console.log(e.封面)
    ///static/media/1.63910e0d.webp
    ///static/media/1.63910e0d.webp
    let hhh = {
      title:e.标题,
      id:e.id,
      img:e.封面
    }
    return hhh;
  })

  let arr2 = JSON.parse(localStorage.getItem('product')) || [];
  let list2 = null;
  if(arr2){
    list2 = arr2.map((e,i)=>{
      // console.log(e,href)
      let hhh = {
        title:e.标题,
        id:e.id,
        img:e.封面,
        href:e.href
      }
      return hhh;
    })
  }


  if(data === 'article'){
    localStorage.removeItem('article');
    if(list.length){
      return JSON.parse(localStorage.getItem('article')) || list;
    }else{
      return [
        { title :"为什么《圆桌派》的观众老骂蒋方舟？", authorname :"魏小河", avatar :"https://img3.doubanio.com/icon/u3340912-61.jpg", update_time :"2017-08-27 14:00:56", summary :"一 我是《锵锵三人行》的忠实观众，顺理成章的，也成为《圆桌派》的观众。 和以前...", id :633196260}
        ,{ title :"独自在家", authorname :"安歌", avatar :"https://img3.doubanio.com/icon/u1795862-3.jpg", update_time :"2017-08-26 17:35:54", summary :"在这之前我一直以为一成不变地等待我的世界失陷了，当我还不知道前方是什么，后方...", id :633649108}
        ,
        { title :"当我逛书展不买书时我还能做些什么", authorname :"向三峡", avatar :"https://img3.doubanio.com/icon/u1024373-11.jpg", update_time :"2017-08-27 06:49:07", summary :"今年是我第三次参加上海书展，开幕前，新同事求带，微信问我何时去，我告其8月18日...", id :634206154}
        ,{ title :"艺术又终结了吗？", authorname :"神经现实", avatar :"https://img3.doubanio.com/icon/u165265254-3.jpg", update_time :"2017-08-26 16:41:41", summary :"越来越多的艺术品和艺术形式以前所未有的数量产出。艺术馆普及世界各地，在有些国...", id :633311053}
        ,
        { title :"终于，和林家栋谈了谈电影、表演和金像奖影帝", authorname :"支离疏", avatar :"https://img3.doubanio.com/icon/u2905955-15.jpg", update_time :"2017-08-27 11:34:54", summary :"", id :633528924}
        ,
        { title :"新品种草&经典回顾丨谁能不爱哑光口红", authorname :"芙蕾娅Freya", avatar :"https://img3.doubanio.com/icon/u9546008-61.jpg", update_time :"2017-08-26 00:31:06", summary :"", id :634021319},
        { title :"青梅竹马这件小事", authorname :"赤豆年糕", avatar :"https://img3.doubanio.com/icon/u38396260-11.jpg", update_time :"2017-08-27 12:28:12", summary :"", id :634104356}
        ,{ title :"今 敏先生去世的第七年，回忆他曾经的自叙", authorname :"机核网", avatar :"https://img3.doubanio.com/icon/u162576392-2.jpg", update_time :"2017-08-27 12:51:31", summary :"", id :634483634}
        ,{ title :"希望还是虚妄？十字路口的国产动画电影", authorname :"白鹅纪", avatar :"https://img1.doubanio.com/icon/u158210937-7.jpg", update_time :"2017-08-25 21:50:48", summary :"", id :634444806}
        ,{ title :"7位女摄影师拍同一对姑娘", authorname :"七七", avatar :"https://img3.doubanio.com/icon/u34715093-12.jpg", update_time :"2017-08-27 14:00:36", summary :"", id :634529429}
        ,{ title :"这支香，仿佛收集了整个夏天的阳光", authorname :"神奇蘑蘑菇", avatar :"https://img3.doubanio.com/icon/u1427914-54.jpg", update_time :"2017-08-26 17:15:51", summary :"", id :634074646}
        ,{ title :"我唐日常（十五）猝不及防的更新", authorname :"春坊正字", avatar :"https://img1.doubanio.com/icon/u51610855-17.jpg", update_time :"2017-08-27 09:04:09", summary :"", id :634525453}]
    }
  }else if(data === 'img'){
    // console.log(list1)
    localStorage.removeItem('img');
    if(list1.length){
      return JSON.parse(localStorage.getItem('img')) || list1
    }else{
      return [
        {
          title:'没有青海湖和茶卡的青海',
          id:1651058003,
          img:img1
        },{
          title:'「人们」',
          id:1638051845,
          img:img2
        },{
         title:'湿湿的梦',
         id:1651158281,
         img:img3
        },{
          title:'即时乐树',
          id:1647018236,
          img:img4
        },{
          title:'在商业社会做个堂堂正正的废物会死吗？',
          id:1651117401,
          img:img5
        },{
          title:'萨尔兹卡默古特',
          id:1649846355,
          img:img6
        },{
          title:'夏天去香港看海',
          id:1650648598,
          img:img7
        },{
          title:'北京红冶钢厂',
          id:1651038482,
          img:img8
        }
      ]
    }

  }else if(data === 'market'){
    localStorage.removeItem('market');
    if(list2.length){
      return JSON.parse(localStorage.getItem('market')) || list2
    }else{
      return [
        {
          title:"悦诗风吟",
          id:1,
          img:"https://img1.doubanio.com/view/dianpu_product_item/large/public/p1974318.jpg",
          href:"https://market.douban.com/item/207844/?r=5&index=1&category=index"
      },
      {
        title:"ERICD",
        id:2,
        img:"https://img3.doubanio.com/view/dianpu_product_item/large/public/p1964580.jpg",
        href:"https://market.douban.com/item/204712/?r=5&index=2&category=index"
      },
      {
        title:"hanalice",
        id:3,
        img:"https://img1.doubanio.com/view/dianpu_product_item/large/public/p1985219.jpg",
        href:"https://market.douban.com/item/213750/?r=5&index=3&category=index"
      },
      {
        title:"觅潮记",
        id:4,
        img:"https://img1.doubanio.com/view/dianpu_product_item/large/public/p1985709.jpg",
        href:"https://market.douban.com/item/213933/?r=5&index=4&category=index"
      },
      {
        title:"macbook",
        id:5,
        img:"https://img3.doubanio.com/view/dianpu_product_item/large/public/p1971660.jpg",
        href:"https://market.douban.com/item/90190/?r=5&index=6&category=index"
      },
      {
        title:"小巨蛋",
        id:6,
        img:"https://img1.doubanio.com/view/dianpu_product_item/large/public/p449949.jpg",
        href:"https://market.douban.com/item/90190/?r=5&index=6&category=index"
      }
    ]
    }
  }
}
export default Homepage;