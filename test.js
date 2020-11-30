var presents = [],
    technos = [],
    offices = [];

$.getJSON("data.json", function (json) {
    console.log(json); // this will show the info it in firebug console
    json.forEach(data => {
        //alert(data.type);
        if (data.type == "present")
            presents[presents.length] = data;
        else if (data.type == "techno")
            technos[technos.length] = data
        else if (data.type == "office")
            offices[offices.length] = data;
    });
    //PRESENTS
    nodeString = "<h1 style=\"font-size: 36px;line-height: 40px;margin: 1em 0 .6em 0;font-weight: normal;color: white;font-family: 'Hammersmith One', sans-serif;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #6Cf;\">Présentations</h1>";
    var index = 0;
    presents.forEach(p => {
        if (index % 3 == 0)
            nodeString += "<div style='width:100%; height:170px;margin: 5px auto;'>";
        nodeString += "<div style='height: 170px; border: 1px solid gray; box-shadow: inset 0 0 12px 4px rgba(0,0,0,0.8);float: left; width: 30%; padding: 10px;margin:5px;'>";
        nodeString += "<a href='#' ";
        nodeString += "style=\"" + p.style + ";text-decoration: none;background-image: linear-gradient(#222b40, #222b40),linear-gradient(#feb2b2, #feb2b2);background-size: 20px 2px, 100% 2px, 0 2px;background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;background-repeat: no-repeat;transition: background-size 2s linear, background-position 2s linear;\" ";
        nodeString += "onmouseenter=\"this.style.backgroundSize='20px 2px, 0 2px, 100% 2px';this.style.backgroundPosition='calc(100% + 20px) 100%, 100% 100%, 0 100%';\" ";
        nodeString += "onmouseleave=\"this.style.backgroundSize = '20px 2px, 100% 2px, 0 2px';this.style.backgroundPosition = 'calc(20px * -1) 100%, 100% 100%, 0 100%';\">";
       
        if ((p.titre).length > 30) {
            var res = (p.titre).split(" ");
            for (let pos = 0; pos < res.length; pos++) {
                nodeString += res[pos] + " ";
                if (Math.floor(res.length / 2) == pos)
                    nodeString += "<br>";
            }
        } else {
            nodeString += p.titre;
        }
        nodeString += "</a> ";
        if (p.mp4 != "") {
            nodeString += " (<a href='" + p.mp4 + "'>MP4</a>)";
        }
        nodeString += "<br>";
        nodeString += "<ul>";
        (p.groupe).forEach(std => {
            nodeString += "<li>" + std + "</li>";
        });
        nodeString += "</ul>";
        nodeString += "</div>";
        index++;
        if (index % 3 == 0) {
            nodeString += "</div><br>";
        }
    });
    nodeString += "<br>";
    $('#mainContent').append(nodeString);

    //TECHNOS
    nodeString = "<h1 style=\"font-size: 36px;line-height: 40px;margin: 1em 0 .6em 0;font-weight: normal;color: white;font-family: 'Hammersmith One', sans-serif;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #6Cf;\">Outils et technologies du metier</h1>";
    index = 0;
    technos.forEach(p => {
        if (index % 3 == 0)
            nodeString += "<div style='width:80%; height:100px;margin: 5px auto;'>";
        nodeString += "<div style='height: 80px; border: 1px solid gray; box-shadow: inset 0 0 12px 4px rgba(0,0,0,0.8);float: left; width: 30%; padding: 10px;margin:5px;'>";
        nodeString += "<a href='#' ";
        nodeString += "style=\"" + p.style + ";text-decoration: none;background-image: linear-gradient(#222b40, #222b40),linear-gradient(#feb2b2, #feb2b2);background-size: 20px 2px, 100% 2px, 0 2px;background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;background-repeat: no-repeat;transition: background-size 2s linear, background-position 2s linear;\" ";
        nodeString += "onmouseenter=\"this.style.backgroundSize='20px 2px, 0 2px, 100% 2px';this.style.backgroundPosition='calc(100% + 20px) 100%, 100% 100%, 0 100%';\" ";
        nodeString += "onmouseleave=\"this.style.backgroundSize = '20px 2px, 100% 2px, 0 2px';this.style.backgroundPosition = 'calc(20px * -1) 100%, 100% 100%, 0 100%';\">";
       
        if ((p.titre).length > 30) {
            var res = (p.titre).split(" ");
            for (let pos = 0; pos < res.length; pos++) {
                nodeString += res[pos] + " ";
                if (Math.floor(res.length / 2) == pos)
                    nodeString += "<br>";
            }
        } else {
            nodeString += p.titre;
        }
        nodeString += "</a>";
        if (p.mp4 != "") {
            nodeString += " (<a href='" + p.mp4 + "'>MP4</a>)";
        }
        nodeString += "</div>";
        index++;
        if (index % 3 == 0) {
            nodeString += "</div><br>";
        }

    });
    nodeString += "<br>";
    $('#mainContent').append(nodeString);

    //OFFICES
    nodeString = "<h1 style=\"font-size: 36px;line-height: 40px;margin: 1em 0 .6em 0;font-weight: normal;color: white;font-family: 'Hammersmith One', sans-serif;text-shadow: 0 -1px 0 rgba(0,0,0,0.4);color: #6Cf;\">MS Office</h1>";
    index = 0;
    offices.forEach(p => {
        if (index % 3 == 0)
            nodeString += "<div style='width:100%; height:170px;margin: 5px auto;'>";
            nodeString += "<div style='height: 140px; border: 1px solid gray; box-shadow: inset 0 0 12px 4px rgba(0,0,0,0.8);float: left; width: 30%; padding: 10px;margin:5px;'>";
        nodeString += "<a href='#' ";
        nodeString += "style=\"" + p.style + ";text-decoration: none;background-image: linear-gradient(#222b40, #222b40),linear-gradient(#feb2b2, #feb2b2);background-size: 20px 2px, 100% 2px, 0 2px;background-position: calc(20px * -1) 100%, 100% 100%, 0 100%;background-repeat: no-repeat;transition: background-size 2s linear, background-position 2s linear;\" ";
        nodeString += "onmouseenter=\"this.style.backgroundSize='20px 2px, 0 2px, 100% 2px';this.style.backgroundPosition='calc(100% + 20px) 100%, 100% 100%, 0 100%';\" ";
        nodeString += "onmouseleave=\"this.style.backgroundSize = '20px 2px, 100% 2px, 0 2px';this.style.backgroundPosition = 'calc(20px * -1) 100%, 100% 100%, 0 100%';\">";
       
        if ((p.titre).length > 30) {
            var res = (p.titre).split(" ");
            for (let pos = 0; pos < res.length; pos++) {
                nodeString += res[pos] + " ";
                if (Math.floor(res.length / 2) == pos)
                    nodeString += "<br>";
            }
        } else {
            nodeString += p.titre;
        }
        nodeString += "</a> ";
        if (p.mp4 != "") {
            nodeString += " (<a href='" + p.mp4 + "'>MP4</a>)";
        }
        nodeString += "<br>";
        nodeString += "<ul>";
        if (p.cours != "")
            nodeString += "<li><a href='" + p.cours + "'>Cours</a></li>";
        if (p.atelier != "")
            nodeString += "<li><a href='" + p.atelier + "'>Atelier</a></li>";
        nodeString += "</ul>";
        nodeString += "</div>";
        index++;
        if (index % 3 == 0) {
            nodeString += "</div><br>";
        }
    });
    $('#mainContent').append(nodeString);
});