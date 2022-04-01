import React, {Component} from 'react';


export default  class Extractor extends Component{
    consntructor(){
        let  url = "http://openinsider.com/screener?s=&o=&pl=&ph=&ll=&lh=&fd=730&fdr=&td=0&tdr=&fdlyl=&fdlyh=&daysago=&xp=1&xs=1&vl=&vh=&ocl=&och=&sic1=-1&sicl=100&sich=9999&isceo=1&iscoo=1&iscfo=1&grp=0&nfl=&nfh=&nil=&nih=&nol=&noh=&v2l=&v2h=&oc2l=&oc2h=&sortcol=0&cnt=100&page=1"
  let   dataSend =   fetch(url).then(function(response) {
        return response.json()
      }).then(function(data) {
        console.log(data)
        dataSend = data
      }).catch(function() {
        console.log("Booo")
      });
      this.state ={ dataSend:''};
    }
   
    
    render(){
        // return(
        //     dataSend
        //     );
        return (null);
    }
}

// export  default Extractor;