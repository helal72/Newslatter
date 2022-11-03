import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles =[
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ousted Pakistan PM Imran Khan shot in shin in 'clear assassination' attempt - Reuters.com",
            "description": "Former Pakistan Prime Minister Imran Khan was shot in the shin on Thursday when his anti-government <a href=\"/world/asia-pacific/pakistan-ex-pm-khan-announces-march-capital-call-early-elections-2022-10-25/\">protest convoy</a> came under attack in the east of …",
            "url": "https://www.reuters.com/world/asia-pacific/shots-fired-near-convoy-former-pakistan-pm-imran-khan-media-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/G2z7PhFe-Y151daXD5-jdP3R1cY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FHOZJHD6HVMQVBHMM2RDR52JWE.jpg",
            "publishedAt": "2022-11-03T14:28:00Z",
            "content": "LAHORE, Nov 3 (Reuters) - Former Pakistan Prime Minister Imran Khan was shot in the shin on Thursday when his anti-government protest convoy came under attack in the east of the country in what his a… [+4145 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Amy Westervelt",
            "title": "‘A renewed sense of urgency’: climate on the ballot in US midterm elections - The Guardian US",
            "description": "From senate and governor races to industry-regulating board contests, outcomes could influence policy for years to come",
            "url": "https://www.theguardian.com/us-news/2022/nov/03/climate-crisis-midterm-elections-states",
            "urlToImage": "https://i.guim.co.uk/img/media/c2f87344bae2285bad42303b3aa7394ee75de4d2/0_323_4928_2957/master/4928.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=544e7dde470e8bc432b03cd92b9df834",
            "publishedAt": "2022-11-03T14:24:00Z",
            "content": "Climate is on the ballot in a big way this November, despite the fact that it is not front and center in any of the campaigns. Even when it comes to voter turnout, the mood of climate voters has been… [+7854 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Travis Caldwell, Jill Martin, Jason Hanna",
            "title": "The Astros throw the World Series' first combined no-hitter -- after the starter's parents kind of predicted it - CNN",
            "description": "Cristian Javier's parents had a notion he'd deliver something special in the World Series on Wednesday.  The Houston Astros starter and three of his fellow hurlers would prove them right as Houston evened the series in spectacular fashion.",
            "url": "https://www.cnn.com/2022/11/02/sport/astros-phillies-no-hitter-game-4-world-series-spt/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221102231440-09b-world-series-game-4-2022.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-03T13:59:00Z",
            "content": "Cristian Javiers parents had a notion hed deliver something special in Game 4 of the World Series. And the Houston Astros starter, with three of his fellow hurlers, would prove them right.\r\nThe Astro… [+3299 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Nicole Vassell",
            "title": "Takeoff shooting - latest: Migos rapper’s coroner report reveals new death details as Offset pays tribute - The Independent",
            "description": "Takeoff shot - live news",
            "url": "https://www.independent.co.uk/arts-entertainment/music/news/takeoff-autopsy-suspected-killer-shooting-video-b2216575.html",
            "urlToImage": "https://static.independent.co.uk/2022/11/01/14/newFile.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-11-03T13:47:10Z",
            "content": "Sign up to Roisin OConnors free weekly newsletter Now Hear This for the inside track on all things music\r\nGet our Now Hear This email for free\r\nTakeoff, a member of rap trio Migos, was shot dead in H… [+5625 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Alexandra Semenova",
            "title": "Stock market news live updates: Stocks tumble after Powell's slower but higher cues - Yahoo Finance",
            "description": "U.S. stocks sank lower early Thursday as Wall Street reeled from assertions by Federal Reserve Chair Jerome Powell that hopes for a policy pivot were...",
            "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-november-3-2022-104257465.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/NsnGYEXqlZlaOL6bI5cENA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/8ed84230-5b1d-11ed-af7f-e418b88def3b",
            "publishedAt": "2022-11-03T13:35:43Z",
            "content": "U.S. stocks sank lower early Thursday as Wall Street reeled from assertions by Federal Reserve Chair Jerome Powell that hopes for a policy pivot were premature after the central bank delivered a four… [+4437 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Fantasy Football Week 9 lineup decisions: Starts, Sits, Sleepers and Busts to know for every game - CBS Sports",
            "description": "Dig into the players who might be tough start/sit calls in your lineup based on game film notes, stats, more",
            "url": "https://www.cbssports.com/fantasy/football/news/fantasy-football-week-9-lineup-decisions-starts-sits-sleepers-and-busts-to-know-for-every-game/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/09/13/612c5a09-5fd4-4286-a5ce-f8e73955004a/thumbnail/1200x675/df9d9c58e5b6f65fb6071e96c656da80/gerald-everett-getty.jpg",
            "publishedAt": "2022-11-03T13:32:00Z",
            "content": "Fantasy Football is all about the matchups. Even though you drafted your team with certain hopes and intentions, your weekly lineup decisions shouldn't be determined by the order you picked your play… [+25669 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Tom's Guide"
            },
            "author": null,
            "title": "Best Buy Black Friday deals LIVE: MacBooks, OLED TVs, headphones and more - Tom's Guide",
            "description": "Here are Best Buy's can't-miss Black Friday deals",
            "url": "https://www.tomsguide.com/deals/live/best-buy-early-black-friday-deals-macbooks-from-dollar799-oled-tvs-from-dollar569",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/QQStPKSGZCdWV4cYXartrD-1200-80.jpg",
            "publishedAt": "2022-11-03T13:30:13Z",
            "content": "2022-11-03T14:39:38.459Z\r\n(Image credit: Future)\r\nThe Chromebook Duet is a dazzling iPad killer. In our Lenovo Chromebook Duet review, we said it offers remarkable value with tons of battery life (ab… [+4107 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KABC-TV"
            },
            "author": null,
            "title": "Powerball Results: Winning numbers drawing yields no winner; lottery jackpot at $1.5B - KABC-TV",
            "description": "The Powerball jackpot just keeps growing after nobody won the massive jackpot in Wednesday night's drawing.",
            "url": "https://abc7.com/powerball-winner-results-numbers/12412147/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/12412216_110322-wls-powerball-drawing-no-winner5a-vid.jpg?w=1600",
            "publishedAt": "2022-11-03T13:01:12Z",
            "content": "The Powerball jackpot just keeps growing after nobody won the massive jackpot in Wednesday night's drawing.\r\nThe winning numbers numbers drawn Wednesday night for a $1.2 billion jackpot were: 2, 11, … [+2035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Selena Gomez on My Mind and Me Documentary, Turning 30 | The Rolling Stone Cover - Rolling Stone",
            "description": "Rolling Stone's December cover star Selena Gomez discusses her upcoming documentary, turning 30 and how she feels at this moment in her expansive career. Get...",
            "url": "https://www.youtube.com/watch?v=surk-YcAIfg",
            "urlToImage": "https://i.ytimg.com/vi/surk-YcAIfg/maxresdefault.jpg",
            "publishedAt": "2022-11-03T13:00:39Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Hanna Ziady, Julia Horowitz",
            "title": "Bank of England fights inflation with biggest rate hike in 33 years - CNN",
            "description": "The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides towards a recession that could last two years.",
            "url": "https://www.cnn.com/2022/11/03/economy/bank-of-england-interest-rates/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221102115338-bank-of-england-1027.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-03T12:02:00Z",
            "content": "The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides tow… [+3132 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Priscilla Alvarez",
            "title": "Immigration officials say Pelosi attacker was in US illegally - CNN",
            "description": "David DePape, the man accused of violently attacking Paul Pelosi last week, was in the United States illegally and may face deportation, the Department of Homeland Security said late Wednesday.",
            "url": "https://www.cnn.com/2022/11/03/politics/david-depape-paul-pelosi-attack/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221031081312-david-depape-dmv-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-03T12:00:00Z",
            "content": "David DePape, the man accused of violently attacking Paul Pelosi last week, was in the United States illegally and may face deportation, the Department of Homeland Security said late Wednesday.\r\nU.S.… [+1670 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Stella Kim, Arata Yamamoto, Jennifer Jett",
            "title": "North Korea continues missile barrage with ICBM test - NBC News",
            "description": "North Korea fired three more missiles on Thursday, including a suspected intercontinental ballistic missile, the South Korean and Japanese governments said.",
            "url": "https://www.nbcnews.com/news/world/north-korea-missiles-suspected-icbm-rcna55385",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-11/221103--north-korea-intercontinental-ballistic-missiles-al-0739-cea5d8.jpg",
            "publishedAt": "2022-11-03T11:32:00Z",
            "content": "SEOUL, South Korea North Korea fired three more missiles Thursday, including an intercontinental ballistic missile, the South Korean and the Japanese governments said, continuing to raise tensions a … [+3802 chars]"
        },
        {
            "source": {
                "id": "nfl-news",
                "name": "NFL News"
            },
            "author": "Nick Shook",
            "title": "Dolphins, LB Bradley Chubb agree to terms on five-year, $110 million contract extension - NFL.com",
            "description": "The Miami Dolphins and linebacker Bradley Chubb have agreed to a five-year, $110 million extension with $63.2 million guaranteed, NFL Network Insider Tom Pelissero reported Thursday.",
            "url": "https://www.nfl.com/news/dolphins-lb-bradley-chubb-agree-to-terms-on-five-year-119-million-contract-exten",
            "urlToImage": "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/h4mfk7xqiahd98fd3pig",
            "publishedAt": "2022-11-03T11:20:00Z",
            "content": "The Dolphins gave up a lot to acquireBradley Chubb at the trade deadline, and they're willing to pay him plenty to keep him in Miami beyond 2022.\r\nChubb and Miami agreed to a five-year, $110 million … [+2632 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Republican door knockers intimidate voters while hunting for fraud, say officials - Reuters.com",
            "description": "The canvassers in California's Shasta County in September wore reflective orange vests and official-looking badges that read “Voter Taskforce.” Four residents said they mistook them for government officials.",
            "url": "https://www.reuters.com/legal/republican-door-knockers-intimidate-voters-while-hunting-voter-fraud-say-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/gQF2mypvxLTQYRLHRYl6-61QTdU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/M667TAXHMBOLRFIH3ZS7CBHJ3U.jpg",
            "publishedAt": "2022-11-03T10:28:00Z",
            "content": "Nov 3 (Reuters) - The canvassers in California's Shasta County in September wore reflective orange vests and official-looking badges that read Voter Taskforce. Four residents said they mistook them f… [+10176 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Leslie Josephs",
            "title": "Pilot contract negotiations with airlines turn sour - CNBC",
            "description": "Airlines are facing the dual challenge of combatting a shortage of pilots while keeping a lid on costs.",
            "url": "https://www.cnbc.com/2022/11/03/us-airlines-pilot-contract-negotiations-turn-rocky.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107144165-1667320704710-gettyimages-1419978325-032a9554_d9490a64-5391-4e66-8025-4e93a17436df.jpeg?v=1667469612&w=1920&h=1080",
            "publishedAt": "2022-11-03T10:00:12Z",
            "content": "Delta Airlines pilots make their way to Terminal 4 to picket for a new contract at JFK International Airport on September 01, 2022 in New York City.\r\nU.S. airlines are profitable again, and their pil… [+5193 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DawgNation"
            },
            "author": "Connor Riley",
            "title": "Jamon Dumas-Johnson ready to be heard against Tennessee: 'He's showing little flashes of Nakobe' - DawgNation",
            "description": "Georgia football linebacker Jamon Dumas-Johnson will play a huge role for Georgia on Saturday.",
            "url": "https://www.DawgNation.com/football/good-day-uga/georgia-football-jamon-dumas-johnson-tennessee/BLF5W3CT65DOVA3U5DFIPAVKIE/",
            "urlToImage": "https://www.dawgnation.com/resizer/-OfCyJkadO6saoznTthRguMNY34=/0x0:1200x628/1200x630/cloudfront-us-east-1.images.arcpublishing.com/ajc/Z6KTE3G2CRENVJAJUC6E4JPQZY.jpg",
            "publishedAt": "2022-11-03T10:00:08Z",
            "content": "Connor Riley, DawgNation Staff\r\n@Kconnorriley\r\nPosted 5 hours ago\r\nWelcome to Good Day, UGA, your one-stop shop for Georgia football news and takes. Check us out every weekday morning for everything … [+3419 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Simone Pathe",
            "title": "The 10 Senate seats most likely to flip in 2022 - CNN",
            "description": "The race for the House is tilting strongly toward the GOP, but the struggle for Senate control is still very much a slog that could go either way, even as late-breaking national winds favor the party out of power.",
            "url": "https://www.cnn.com/2022/11/03/politics/senate-race-rankings-november-elections/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221102211129-capitol-building-file-110222.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-03T10:00:00Z",
            "content": "The race for the House is tilting strongly toward the GOP, but the struggle for Senate control is still very much a slog that could go either way, even as late-breaking national winds favor the party… [+20576 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Elon Musk to Lay Off About 3,700 Twitter Employees on Friday: Report - Gizmodo",
            "description": "The billionaire previously denied reports he planned to fire 75% of workers. Now it's just 50%.",
            "url": "https://gizmodo.com/elon-musk-fire-3700-twitter-employees-friday-50-percent-1849736018",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fc56e169f780bca2b91a92f62d1fbf27.jpg",
            "publishedAt": "2022-11-03T10:00:00Z",
            "content": "Elon Musk plans to fire roughly half of Twitters workforce as a cost-cutting measure on Friday, according to a new report from Bloomberg News. Musk had denied reports that he was going to lay off 75%… [+4064 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "NHC now tracking 2 tropical waves off Florida, US. Hurricane Martin growing more powerful - Palm Beach Post",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMirwFodHRwczovL3d3dy5wYWxtYmVhY2hwb3N0LmNvbS9zdG9yeS93ZWF0aGVyL2h1cnJpY2FuZS8yMDIyLzExLzAzL25hdGlvbmFsLWh1cnJpY2FuZS1jZW50ZXItdHJhY2stdHJvcGljYWwtd2F2ZXMtb2ZmLWZsb3JpZGEtdXBkYXRlLWZvcmVjYXN0LXBhdGgtaW1wYWN0LW1hcnRpbi1saXNhLzgyNTU0NDMwMDEv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-03T09:31:07Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "",
            "title": "Dozens of species thought to be mute make sounds after all - NPR",
            "description": "Some animals like birds and frogs are famous for the sounds they make. But have you ever heard a turtle talk? Most turtles were thought to not make sounds at all — before researchers went deep.",
            "url": "https://www.npr.org/2022/11/03/1133418579/turtles-sound-acoustic-communicate",
            "urlToImage": "https://media.npr.org/assets/img/2022/11/01/hydrophone_wide-a3455528ccdf968e66867b95c67349641714cdad-s1400-c100.png",
            "publishedAt": "2022-11-03T09:01:11Z",
            "content": "Gabriel Jorgewich Cohen began researching whether turtle species and other vertebrates thought to be mute make sounds by recording his own pet turtles. The hydrophone used for recording can be seen o… [+3791 chars]"
        }
    ]
     constructor(){
        super();
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }
  render() {
    return (
        <div className="container my-3">
            <h2>Newslatter top headding</h2>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title = "mytitle" discription ="mydesc" imageUrl="https://www.reuters.com/resizer/G2z7PhFe-Y151daXD5-jdP3R1cY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FHOZJHD6HVMQVBHMM2RDR52JWE.jpg"/>
                </div>
                <div className="col-md-4">
                <NewsItem title = "mytitle" discription ="mydesc"/>
                </div>
                <div className="col-md-4">
                <NewsItem title = "mytitle" discription ="mydesc"/>
                </div>
            </div>
            
      </div>
    )
  }
}

export default News