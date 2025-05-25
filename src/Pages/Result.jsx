import React from 'react'
import ResultsAdd from '../components/ResultsAdd/ResultsAdd.jsx'
import OtherResources from '../components/OtherResources/OtherResources.jsx'
import ResultsBanner from '../components/ResultsBanner/ResultsBanner.jsx'

function Result() {
    const OtherResourcesData = [
        { para: "Free Mock Test For JEE", linkName: "Take Test", link: "/home", image:"https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_auto,q_auto/v1738050888/uxqrvzofqoibjbhl25va.png?_upload_ref=ic_img_tool&__ar__=1.68" },
        { para: "JEE Advanced Rank Booster Course: Target 2025", linkName: "Enroll now", link: "/home", image:"https://asset.allen.in/0c380d44-c1ce-400f-86f7-63ed05be70ea/original.png" },
        { para: "How to Check Your JEE Main 2025 Result", linkName: "Check Now", link: "/neet-rank-predictor", image:"https://asset.allen.in/83ba5466-2a00-41f6-a36c-22bf6c8a3ded/original.png" },
        { para: "JEE Main Video Solutions and Answer Key", linkName: "View Solutions", link: "/neet-rank-predictor", image:"https://asset.allen.in/5cdf2241-d96f-4805-a4f6-8190d6ac2bc0/original.png" },
        { para: "JEE Main Paper Analysis", linkName: "View Analysis", link: "/neet-rank-predictor", image:"https://asset.allen.in/3997a32e-90ad-4558-9287-e4fff0d1e730/original.png" }
    ];
    const HistoricalResults = [
        { para: "JEE 2024", linkName: "Know More", link: "/home", image:"https://asset.allen.in/8a391db0-4024-420c-8257-d2eb192ad9a5/original.png" },
        { para: "JEE 2023", linkName: "Know More", link: "/home", image:"https://asset.allen.in/2ce7d70b-0314-409d-89fb-6719dcfe939f/original.png" },
        { para: "JEE 2022", linkName: "Know More", link: "/home", image:"https://asset.allen.in/ff320439-92ec-4b9e-bfb3-f6cca7006871/original.png" },
    ]

  return (
    <div style={{paddingTop: "100px"}}>
      <ResultsAdd img="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745076309/xrifb7apnlafargthqx3.png?_upload_ref=ic_img_tool&__ar__=2.10" />
      <ResultsAdd img="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745076404/okgf6jqzvqnpkh509gbp.png?_upload_ref=ic_img_tool&__ar__=2.10"  />
      <div className="other-resources ">
                <h1 className="other-resources-head">Other Resources</h1>
                <div className="other-resources-container">
                    {OtherResourcesData.map((item, index) => (
                        <OtherResources key={index} para={item.para} linkName={item.linkName} link={item.link} image = {item.image}/>
                    ))}
                </div>
            </div>
      <div className="other-resources ">
                <h1 className="other-resources-head">Historical Results</h1>
                <div className="other-resources-container">
                    {HistoricalResults.map((item, index) => (
                        <OtherResources key={index} para={item.para} linkName={item.linkName} link={item.link} image = {item.image}/>
                    ))}
                </div>
            </div>
        <ResultsBanner img="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1600,f_avif,q_auto/v1745055139/owplexfcsxckd7epxrap.png?_upload_ref=ic_img_tool&__ar__=4.03" />
    </div>
  )
}

export default Result
