country = getCountry()
region = getRegion()
console.log(country)
console.log(region)
var mergeObj = country.map(t1 => ({...t1, ...region.find(t2 => t2.id === t1.regionId)}))
var result = mergeObj.map(item=>{
    return {[item['abbr']]:item['name']}
})
console.log(result)

function getCountry(){
    return [
        {name: "Thailand", abbr: "th", remark: "", regionId: 1},
        {name: "Singapore", abbr: "sg", remark: "This is sg", regionId: 1},
        {name: "United State", abbr: "US", remark: "", regionId: 7},
  ]
}

function  getRegion(){
   return [
        {id: 1, name: "Asia"},
        {id: 2, name: "South America"},
        {id: 7, name: "North America"}
    ]
}