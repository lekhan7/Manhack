import React from 'react';
import '../allcss/home.css';

import { Link } from 'react-router-dom';

import footer from "../img/footer.jpg"
import crew from "../img/crew.jpg"
function Home() {
  return (
    <>
      <div>
        <header className="header">
          <div>
            <ul className="nav-items">
              <div className="main-header">

                <h1 id="codex" >
                  CODEX-CREW
                </h1>

              </div>

            </ul>
          </div>
        </header>



        <h1 className='cdx'>  Codex Geo- Intelligent Health Insights</h1>

        <div className="navbar">

          <Link className="latestupdate" to="/alert"> VIEW LATEST UPDATES  </Link> <br />

          <Link className='dashboard' to="/heatmap" >REGIONAL HEALTH INSIGHTS DASHBOARD  </Link>
          <Link className='details' to="/application">Provied your details for us  </Link><br />

        </div>

      </div>
      <div className='aboutus '><p>

        <h1>About Us</h1>
        🌍 Codex Geo – Intelligent Health Insights
        At Codex Geo, we merge cutting-edge geo-intelligence with real-time health analytics to provide a comprehensive view of the world’s health landscape. Our platform is designed to monitor, map, and predict health trends globally — making it easier for individuals, healthcare providers, researchers, and decision-makers to stay informed and proactive.

        🚀 Our Mission
        To empower people with timely and intelligent health insights, enhancing awareness, safety, and preventive action through technology.

        🧠 What We Do
        Codex Geo collects and visualizes global health data — including disease outbreaks, environmental health risks, public health alerts, and more — and delivers it in a clear, easy-to-understand format. Our system uses geo-mapping, AI, and data science to offer:

        🌐 Real-time global health updates

        📍 Location-based risk alerts

        📊 Interactive visualizations and heatmaps

        🔎 Trend analysis and predictions

        🧭 Travel health guidance

        💡 Educational resources for public health awareness

        Whether you're a citizen trying to stay informed, a traveler preparing for your next journey, or a health professional analyzing regional data, Codex Geo is your one-stop health intelligence tool.

        🤝 Why Codex Geo?
        Accuracy you can trust
        Powered by verified data sources and intelligent systems.

        Awareness that matters
        Our goal is to help you stay one step ahead of health threats by understanding what’s happening around you.

        Impact-driven approach
        We believe knowledge saves lives. By making health data open and visual, we promote smarter choices and stronger communities.

        🌐 Join the Movement
        Codex Geo isn’t just a platform — it’s a global movement for better health awareness. Explore the world with insight. Protect yourself with knowledge. Help us create a healthier, more informed future.

        Codex Geo — Where Data Meets Health.

        Let me know if you want to translate this into a more concise version, a different tone (e.g., corporate, friendly, startup-style), or in bullet point layout.
      </p></div>
      <footer>
        <div className="mainfoooter">
          <div className="formore">
            <h2>For More Details 👇</h2>

          </div>



          <div className="query">

            <h2>Send your query</h2>
          </div>
          <div className='name'>
            <h1>Name:</h1><br />
            <input  className='nin' type='text' /><br />
            </div>
            <div className='email'>
            <h1>Email:</h1><br />
            <input  className='ein' type='text' /><br />
            </div>
            <div className='urqu'>
            <h1>Your query:</h1><br />
            <textarea className='qin' />
            
          </div>

          <div className='submitedq'>
          <button className='sumbitbtn'>SEND</button>
        </div>
        </div>



      </footer>

    </>
  );
}

export default Home;