let color = ['blue','orange','red','green'];

let color_id = ['#hello_c','#name','#soci1','#soci2','#soci3','#soci4','#soci5','#soci6'];

let back_color_id = ['#round1','#round3','#round4','#round5','#round2B']

function blueChange(){
    color_b = color[0]
    color_id.forEach((change_color) => {
        $(change_color).css('color',color_b)
    });

    back_color_id.forEach((change_background)=>{
        $(change_background).css('background-color',color_b)
    })
}
function orangeChange(){
    color_o = color[1]
    color_id.forEach((change_color) => {
        $(change_color).css('color',color_o)
    });

    back_color_id.forEach((change_background)=>{
        $(change_background).css('background-color',color_o)
    })
}
function redChange(){
    color_r = color[2]
    color_id.forEach((change_color) => {
        $(change_color).css('color',color_r)
    });

    back_color_id.forEach((change_background)=>{
        $(change_background).css('background-color',color_r)
    })
}
function greedChange(){
    color_g = color[3]
    color_id.forEach((change_color) => {
        $(change_color).css('color',color_g)
    });

    back_color_id.forEach((change_background)=>{
        $(change_background).css('background-color',color_g)
    })
}