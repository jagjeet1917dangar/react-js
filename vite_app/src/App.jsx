import './index1.css';
import logo from './assets/logo.png';
import kinni from './assets/kinni.png';
import naah from './assets/naah.png';
import pachhu from './assets/pachhu.png';
import diljit from './assets/diljit.png';
import Search from './assets/Search.png';
import dosanjh from './assets/dosanjh.png';
import abe from './assets/abe.png';
import fk from './assets/fk.png';
import picOne from './assets/picOne.png';
import picthree from './assets/picthree.png';
import pictwo from './assets/pictwo.png';
import picten from './assets/picten.png';
import picfour from './assets/picfour.png';
import piceleven from './assets/piceleven.png';
import picfive from './assets/picfive.png';
import picnine from './assets/picnine.png';
import picseven from './assets/picseven.png';
import bkl from './assets/bkl.png';
import bkl2 from './assets/bkl2.png';
import picthirteen from './assets/picthirteen.png';
import picfifteen from './assets/picfifteen.png';
import picfourteen from './assets/picfourteen.png';
import stl1 from './assets/stl1.png';
import ndl2 from './assets/ndl2.png';
import rdl3 from './assets/rdl3.png';
import thl4 from './assets/thl4.png';
import thl5 from './assets/thl4.png';
import thl6 from './assets/thl4.png';
import thl7 from './assets/thl4.png';
import thl from './assets/thl4.png';


function App() {
  return (
    <>
      <img className="hari" src={logo} alt="Logo" />
      <div className="searchbar">
        <div className="searchicon">
          <img width="19px" src={Search} alt="Search Icon" />
        </div>
        <h2 className="h2">Search projects, creators, and categories</h2>
      </div>
      <div className="searchbarnibajuma">
        <div className="start">
          <button onClick={() => openLogininForm()}>
            <h1 className="h1">Start a project</h1>
          </button>
        </div>
        <div className="login">
          <h1 className="l">Log in</h1>
        </div>
      </div>
      <div className="searchbarniniche">
        <div className="text">Art</div>
        <div style={{ marginLeft: '-50px' }} className="text">Comics</div>
        <div style={{ marginLeft: '-70px' }} className="text">Crafts</div>
        <div style={{ marginLeft: '-90px' }} className="text">Dance</div>
        <div style={{ marginLeft: '-110px' }} className="text">Design</div>
        <div style={{ marginLeft: '-130px' }} className="text">Fashion</div>
        <div style={{ marginLeft: '-140px' }} className="text">Film</div>
        <div style={{ marginLeft: '-170px' }} className="text">Food</div>
        <div style={{ marginLeft: '-200px' }} className="text">Games</div>
        <div style={{ marginLeft: '-220px' }} className="text">Journalism</div>
        <div style={{ marginLeft: '-210px' }} className="text">Music</div>
        <div style={{ marginLeft: '-235px' }} className="text">Photography</div>
        <div style={{ marginLeft: '-215px' }} className="text">Publishing</div>
        <div style={{ marginLeft: '-210px' }} className="text">Technology</div>
        <div
          style={{
            marginLeft: '-210px',
            borderLeft: '1px solid grey',
            paddingLeft: '10px',
            height: '30px',
            paddingTop: '0px',
          }}
          className="text text1"
        >
          Discover
        </div>
      </div>
      <div className="border"></div>
      <div className="diljit">
        <img src={diljit} alt="Diljit" />
      </div>
      <div className="he">
        <h1 className="ha">Bring a creative project to life.</h1>
      </div>
      <div className="hho">
        <h2 className="oh">ON KICKSTARTER:</h2>
      </div>
      <div className="dosanjh">
        <img src={dosanjh} alt="Dosanjh" />
      </div>
      <div className="vachhe">
        <div className="khana">
          <h1 className="tota">268,626</h1>
          <h1 className="nanu">projects funded</h1>
        </div>
        <div className="khana">
          <h1 className="tota">$8,400,430,809</h1>
          <h1 className="nanu">towards creative work</h1>
        </div>
        <div className="khana">
          <h1 className="tota">98,920,939</h1>
          <h1 className="nanu">pledges</h1>
        </div>
      </div>
      <div>
        <div className="hell">
          <img src={kinni} alt="Kinni" />
        </div>
        <div className="naah">
          <img src={naah} alt="Naah" />
        </div>
        <div className="are">
          <img src={pachhu} alt="Pachhu" />
        </div>
        <div className="cntr">
          <img src={abe} alt="Abe" />
        </div>
        <div className="c">
          <img src={fk} alt="FK" />
        </div>
        <div className="hve">
          <img style={{ borderRadius: '10px' }} src={picOne} alt="Project 1" />
          <h2 className="deep">
            MSHIN MEGAMI TENSEI - THE BOARD GAME
            <br />
            <h4 className="andar">ICREA</h4>
          </h2>
          <h3 className="nawww">
            シリーズを代表する70体超の精緻な悪魔フィギュアと共に、新
            <br />
            世界の創造を目指す戦略的ボードゲーム / A strategic board game
            <br />
            that create a new world with over 70 detailed demon
            <br />
            figures.
          </h3>
        </div>
        <div className="e">
          <img
            style={{ borderRadius: '10px' }}
            width="300px"
            src={pictwo}
            alt="Project 2"
          />
          <h2 className="deep">
            Monkey peak...
            <br />
            <h4 className="andar">Antarctic Press</h4>
          </h2>
        </div>
        <div className="aukaat">
          <img width="50px" src={picfour} alt="Project Thumbnail 1" />
        </div>
        <div className="messi">
          <img
            style={{ borderRadius: '10px' }}
            width="300px"
            src={picfive}
            alt="Project 3"
          />
          <h2 className="deep">
            Monkey peak...
            <br />
            <h4 className="andar">Antarctic Press</h4>
          </h2>
        </div>
        <div className="aukaat1">
          <img width="50px" src={picseven} alt="Project Thumbnail 2" />
        </div>
        <div className="thak">
          <img
            style={{ borderRadius: '10px' }}
            width="300px"
            src={picnine}
            alt="Project 4"
          />
          <h2 className="deep">
            Monkey peak...
            <br />
            <h4 className="andar">Antarctic Press</h4>
          </h2>
        </div>
        <div className="aukaat2">
          <img
            style={{ borderRadius: '25px' }}
            width="40px"
            src={piceleven}
            alt="Project Thumbnail 3"
          />
        </div>
        <div className="thak1">
          <img
            style={{ borderRadius: '10px' }}
            width="300px"
            src={picten}
            alt="Project 5"
          />
          <h2 className="deep">
            Monkey peak...
            <br />
            <h4 className="andar">Antarctic Press</h4>
          </h2>
        </div>
        <div className="abhi">
          <img
            style={{ borderRadius: '25px' }}
            width="40px"
            src={picthree}
            alt="Project Thumbnail 4"
          />
        </div>
      </div>
      <div className="buttons">
        <div className="b1">Tabletop Games</div>
        <div className="b2">Tokyo, Japan</div>
      </div>
      <div className="box"></div>
      <div className="imagespart">
        <div className="khana">
          <img src={bkl} alt="" />
        </div>
        <div className="khana">
          <img src={bkl2} alt="" />
        </div>
      </div>
      <div className="textpart">
        <div className="pina">
          <h1 className="namaste">
            Open Call: Make 100 <br />
            <h3 className="ji">
              Start the year creatively with our Make 100 Open Call! Launch <br />
              a campaign in January with 100 rewards, and we’ll feature it in a <br />
              curated, month-long showcase.
            </h3>
          </h1>
        </div>
        <div className="pina">
          <h1 className="namaste">
            Kickstarter Blog <br />
            <h3 className="ji">
              A hub resource for company news, creator tips, project guidance, <br />
              and product updates, providing everything you need to know about <br />
              what’s happening at Kickstarter.
            </h3>
          </h1>
        </div>
      </div>
      <div className="divpart">
        <div className="nanananan"></div>
        <div className="nanananan"></div>
      </div>
      <div className="box" style={{ marginTop: "50px" }}></div>
      <div className="i">
        <h3 className="s">FRESH FAVORITES</h3>
      </div>
      <div className="jeet">
        <div className="jis1">
          <img style={{ borderRadius: "10px" }} width="360px" src={picthirteen} alt="" />
          <h2 className="deep">
            Not Enough Mana: <br />
            Spellsmiths & Summoners ↯
            <h4 className="andar">Paweł Piskorski</h4>
          </h2>
        </div>
        <div className="jis2">
          <img style={{ borderRadius: "10px" }} width="360px" src={picfifteen} alt="" />
          <h2 className="deep">
            Holly G's School Bites: Cutting Class!
            <br />
            <h4 className="andar">Holly Golightly</h4>
          </h2>
        </div>
        <div className="jis3">
          <img style={{ borderRadius: "10px" }} width="360px" src={picfourteen} alt="" />
          <h2 className="deep">
            Pixeldarts: The Retro-Inspired Electronic Throwing Game
            <br />
            <h4 className="andar">Chessnut</h4>
          </h2>
        </div>
      </div>
      <div className="yash">
        <div className="imagessss1">
          <img width="40px" src={"pic 16.png"} alt="" />
        </div>
        <div className="imagessss1">
          <img width="40px" style={{ borderRadius: "20px" }} src={"pic 17.png"} alt="" />
        </div>
        <div className="imagessss1">
          <img width="40px" style={{ borderRadius: "20px" }} src={"pic 18.png"} alt="" />
        </div>
      </div>
      <div className="box" style={{ marginTop: "-10px" }}></div>
      <div className="i">
        <h3 className="s">CREATOR TIPS FROM THE KICKSTARTER BLOG</h3>
      </div>
      <div className="sigmaboy">
        <div className="sigma">
          <img src={stl1} alt="" />
        </div>
        <div className="sigma">
          <img src={ndl2} alt="" />
        </div>
        <div className="sigma">
          <img src={rdl3} alt="" />
        </div>
        <div className="sigma">
          <img src={thl4} alt="" />
        </div>
      </div>
      <div className="ohioboy">
        <div>
          <h2 className="deep">
            The Psychology of Pricing Your <br />
            Rewards
            <br />
            <h4 className="andar" style={{ color: "black", marginTop: "10px" }}>
              Explore the psychological strategies behind <br />
              reward pricing to attract more backers and <br />
              optimize your campaign’s success.
            </h4>
          </h2>
        </div>
        <div>
          <h2 className="deep">
            Effective Game Playtesting Techniques for Better Results
            <br />
            <h4 className="andar" style={{ color: "black", marginTop: "10px" }}>
              Unlock the full potential of your game with these essential playtesting techniques that can help you achieve better results and create a more engaging experience for players.
            </h4>
          </h2>
        </div>
        <div>
          <h2 className="deep" style={{ marginLeft: "50px" }}>
            How Early-Bird Rewards Can Help Get Your Campaign Funded in 24 Hours
            <br />
            <h4 className="andar" style={{ color: "black", marginLeft: "50px", marginTop: "10px" }}>
              Unlock the power of early-bird rewards to captivate backers, build momentum, and secure funding faster.
            </h4>
          </h2>
        </div>
        <div>
          <h2 className="deep" style={{ marginLeft: "40px" }}>
            The ABCs of Crowdfunding: A Complete Glossary
            <br />
            <h4 className="andar" style={{ color: "black", marginLeft: "40px", marginTop: "10px" }}>
              To help you navigate the world of crowdfunding, we've compiled a comprehensive glossary of terms from A to Z.
            </h4>
          </h2>
        </div>
      </div>
      <div className="box" style={{ marginTop: "-5px" }}></div>
      <div className="mathu">
        <div className="chill">
          <img src={"mathu.PNG"} alt="" />
        </div>
        <div className="nanananan" style={{ marginLeft: "690px", marginTop: "-245px" }}></div>
        <div className="t">
          <h1 className="gata">Forward Funds</h1>
        </div>
        <div className="t1">
          <h3 className="only">
            Get access to funds from nonprofits and foundations that back <br />
            Kickstarter campaigns related to their visions for a more creative <br />
            and equitable world.
          </h3>
        </div>
      </div>
      <div className="box" style={{ marginTop: "140px" }}></div>

    </>
  );
}

export default App;
