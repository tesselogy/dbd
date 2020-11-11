var height = 932;
var width = 932;
var radius = width/2;

var svg = d3.select("#chart")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

d3.json("https://gist.githubusercontent.com/mbostock/1044242/raw/3ebc0fde3887e288b4a9979dad446eb434c54d08/flare.json",function(error,flaredata){
    if(error)
        throw error;

    console.log(flaredata);

    //转换数据
    const map = new Map;
    flaredata.forEach(function find(d) {
        const name = d.name;

        if (map.has(name))
            return map.get(name);
        const i = name.lastIndexOf(".");
        map.set(name, d);
        if (i >= 0) {
            find({name: name.substring(0, i), children: []}).children.push(d);
            d.name = name.substring(i + 1);
        }
        return d;
    });

    var data = map.get("flare");

    console.log(data);

    var cluster = d3.layout.cluster()
        .size([360,radius-100]);


    var nodes = cluster.nodes(data);
    var links = [];

    var map_imports = new Map;
    nodes.forEach(function(d){
        map_imports[d.name]=d;
    });

    nodes.forEach(function(d){
        if(d.imports){
            d.imports.forEach(function(i){
                let index = i.lastIndexOf(".");
                let imports_name = i.substring(index+1);
                if(index>=0)
                    links.push({source:map_imports[d.name],target:map_imports[imports_name]});
            });
        }
    });


    console.log(nodes);
    console.log(links);


    var bundle = d3.layout.bundle();

    var line = d3.svg.line.radial()
            .interpolate("bundle")
            .tension(0.85)
            .radius(d => d.y)
    .angle(d => d.x/180*Math.PI);

    var link = svg.append("g")
        .attr("transform","translate("+radius+","+radius+")")
        .selectAll(".link")
        .data(bundle(links))
        .enter()
        .append("path")
        .attr("class","link")
        .attr("d",line);


    var node = svg.append("g")
            .attr("transform","translate("+radius+","+radius+")")
            .selectAll(".node")
            .data(nodes)
            .enter()
            .append("text")
            .attr("class","node")
            .attr("dx",d => (d.x<180?8:-8))
    .attr("dy",".31em")
        .attr("transform",d => ("rotate("+(d.x-90)+")translate("+d.y+")"+(d.x<180?"":"rotate(180)")))
    .style("text-anchor",d => (d.x<180?"start":"end"))
    .text(d => d.name);

});
