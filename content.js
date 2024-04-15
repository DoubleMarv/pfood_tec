var accordionContent = function(){
const accordion_image_1 = document.getElementById('accordion_image_1');
const accordion_text_1 = document.getElementById('accordion_text_1');
const accordion_link_1 = document.getElementById('accordion_link_1');

const accordion_image_2 = document.getElementById('accordion_image_2');
const accordion_text_2 = document.getElementById('accordion_text_2');
const accordion_link_2 = document.getElementById('accordion_link_2');

const accordion_image_3 = document.getElementById('accordion_image_3');
const accordion_text_3 = document.getElementById('accordion_text_3');
const accordion_link_3 = document.getElementById('accordion_link_3');

const accordion_image_4 = document.getElementById('accordion_image_4');
const accordion_text_4 = document.getElementById('accordion_text_4');
const accordion_link_4 = document.getElementById('accordion_link_4');

var accordion_a_contentSetUp = function(){
accordion_image_1.src = 'https://i.ibb.co/NZKKpJX/Auto-Cheese-Cooler-High-Res-01-B.png';
accordion_text_1.innerHTML = `
<p>The <strong>Power Food Technology Automated Cheese Cooler</strong> is the evolution of over 30 years’ experience of tailored cooling in the cheese making industry.</p>
<p>Confronted with challenges of labor scarcity, high energy costs, and production space, this automated cooling solution can help you to face these issues now and into the future.</p>
<p>Using custom-designed coils and fans, optimized airflows and temperatures are carefully selected to ensure every block is cooled to the same efficiency.</p>
<p>Cooling demands, with in-feed temperature up to 80°C/176°F and out-feed as low as 4°C/40°F, are satisfied, whilst ensuring process-critical cooling time profiles are matched to specification.</p>
<p>The cooler is versatile, accommodating cheese blocks in either cases or crates, and can be equipped with all essential conveyor and transfer equipment for seamless end-to-end operation, ensuring trouble-free functionality.</p>
<p>Whether it's 2 or 15 blocks per minute, the cooler's modular design can be configured to match required capacities.</p>
`;
accordion_link_1.href = 'https://www.powerfoodtec.com/Portals/0/Image/News/Power-Food-Technology--Automated-Cheese-Cooler_.pdf?ver=pRFgKhk2saIY4Pit9UGr9A%3d%3d';

//leak detector
accordion_image_2.src = 'https://i.ibb.co/zP9Fqx2/leak-detector.png';
accordion_text_2.innerHTML = `<p>Mold development on the 20kg/44lb cheese blocks tends to be found after longer term storage and just before cheese conversion. This is costly in term of returns but more importantly customer reputation. Typically, the block is case packed, making it impossible to inspect during warehousing.</p>
<p>Mold contamination of the block arises from loss of vacuum seal, generally because of a poor seal on the bag or mechanical damage downstream. </p>
<p>Early detection is key to eliminating this risk, but also to allow full recovery of the cheese block by re-bagging and resealing. Camera and mechanical testing equipment have been applied with some success but are prone to error, false rejection and needs frequent operator intervention.</p>
<p>This <strong>Power Food Technology Leak Detector</strong> overcomes these limitations with positive mechanical testing by means of a unique traveling test head. Uniquely designed to meet customer needs, it provides an autonomous and reliable system to check for leaking vacuum in every sealed cheese block from the sealing machine and delivers superior detection efficiency with the lowest false reject levels in the industry.</p>`;
accordion_link_2.href = 'https://www.powerfoodtec.com/Portals/0/Image/News/Power-Food-Technology--Leak-Detector_.pdf?ver=cqdbmgfVxwp4tF4r-LtsiA%3d%3d';


//wrap around case packer
accordion_image_3.src = 'https://i.ibb.co/NS3bwxX/wrap-around-case-packer.jpg';
accordion_text_3.innerHTML = `
<p>The cardboard casing surrounding cheese blocks serves not only as a protective barrier, but also is an opportunity to enhance the product's appearance and shape. </p> 
<p><strong>Power Food Technology's Wrap Around Case Packer</strong>, addresses shape and finish issues associated with cheese block production, leading to reduced off-cuts and enhanced yield during conversion to retail blocks and slicing. </p> 
<p>With over 30 years of expertise, meticulous design, and quality construction, consistent benefits are achieved. Utilizing a high compression technique, blocks undergo squaring throughout the wrapping process, promoting optimal curd flow to the corners and eliminating dish-shaped surfaces, and minimizing trim loss. </p> 
<p>Optionally, liner insertion reinforces case strength, reducing shape distortion during pallet storage and transport. This fully self-contained, automatic machine boasts independent control and onboard PLC controller for seamless operation. </p>
`;
accordion_link_3.href = 'https://www.powerfoodtec.com/Portals/0/Image/News/Power-Food-Technology--Wrap-Around-Case-Packer_.pdf?ver=zVrVz9EsM9adIZySajlR6g%3d%3d';

//palletizer

accordion_image_4.src = 'https://i.ibb.co/YNZ4k9g/palletizer-cell.png';
accordion_text_4.innerHTML = `
<p>In today's labor-scarce environment, automated handling is the logical solution to mitigate injury risks associated with manual labor, especially in heavy product handling like cheese blocks. Power Food Technology has pioneered robotic palletizing systems for the cheese industry, for over two decades, capable of handling varying block weights. Our solution now offers specialized grippers for bagged or cased cheese, minimizing block drops and reducing energy consumption compared to vacuum grippers.  </p>
<p>Complete palletizing cells provided include robots, purpose-designed grippers, pick stations, pallet build stations, conveyors, wrapping, barcode scanning, safety measures, etc., fully integrated and bespoke to your needs. Robot product options include ABB, FANUC, and KUKA, backed by comprehensive after-sales support, including remote assistance, from Power Food Technology's service department. </p>
`;
accordion_link_4.href = '';


};


const accordion_b_image_1 = document.getElementById('accordion_b_image_1');
const accordion_b_text_1 = document.getElementById('accordion_b_text_1');
const accordion_b_link_1 = document.getElementById('accordion_b_link_1');

const accordion_b_image_2 = document.getElementById('accordion_b_image_2');
const accordion_b_text_2 = document.getElementById('accordion_b_text_2');
const accordion_b_link_2 = document.getElementById('accordion_b_link_2');

const accordion_b_image_3 = document.getElementById('accordion_b_image_3');
const accordion_b_text_3 = document.getElementById('accordion_b_text_3');
const accordion_b_link_3 = document.getElementById('accordion_b_link_3');


//crate unloading
var accordion_b_contentSetUp = function(){
accordion_b_image_1.src = 'https://i.ibb.co/MhRyYFw/crate-unloader.png';
accordion_b_text_1.innerHTML = `
<p>Power Food Technology offers a solution for handling hot processed cheese, whether you are using form fill seal packs or cheese-in-bag in crate.</p>
<p><strong>Crate Loading</strong></p>
<p>The process cheese crate loader accepts 10 Kg (22lb) FFS pack, gently conveying and aligning it to an empty crate for loading. This unique machine design ensures positive and reliable crate loading of the hot pliable pack. One loaded the crate is transferred and lifted to multi-level conveyors which in-feed to the Power Food Technology Automatic Cheese Cooler. </p>
<p><strong>Crate Unloading</strong></p>
<p>Once the cheese has been cooled to the required finish temperature, the cheese becomes firm, and the pack/block is well formed. Upon exit of the cooler, each cheese block must be unloaded from the crate. This is done by a unique crate ejection technique, which achieves reliable and gentle transfer of the cheese to palletizing and transfers the empty crate to the crate return for the crater loader. </p>
<p><strong>Automation</strong></p> 
<p>Both systems can be supplied with on board control or control as part of the complete Power Food Technology end of line solution </p>
`;
accordion_b_link_1.href = '';

//Automated Cheese Cooler
accordion_b_image_2.src = 'https://i.ibb.co/gJ0KJdW/cheese-cooler.png';
accordion_b_text_2.innerHTML = `
<p>The <strong>Power Food Technology Automated Cheese Cooler</strong> is the evolution of over 30 years’ experience of tailored cooling in the cheese making industry.</p>
<p>Confronted with challenges of labor scarcity, high energy costs, and production space, this automated cooling solution can help you to face these issues now and into the future.</p>
<p>Using custom-designed coils and fans, optimized airflows and temperatures are carefully selected to ensure every block is cooled to the same efficiency.</p>
<p>Cooling demands, with in-feed temperature up to 80°C/176°F and out-feed as low as 4°C/40°F, are satisfied, whilst ensuring process-critical cooling time profiles are matched to specification.</p>
<p>The cooler is versatile, accommodating cheese blocks in either cases or crates, and can be equipped with all essential conveyor and transfer equipment for seamless end-to-end operation, ensuring trouble-free functionality.</p>
<p>Whether it's 2 or 15 blocks per minute, the cooler's modular design can be configured to match required capacities.</p>`;
accordion_b_link_2.href = 'https://www.powerfoodtec.com/Portals/0/Image/News/Power-Food-Technology--Automated-Cheese-Cooler_.pdf?ver=pRFgKhk2saIY4Pit9UGr9A%3d%3d';

//Robot Palletising Solutions
accordion_b_image_3.src = 'https://i.ibb.co/gwCqJwj/palletizer.png';
accordion_b_text_3.innerHTML = `<p>In today's labor-scarce environment, automated handling is the logical solution to mitigate injury risks associated with manual labor, especially in heavy product handling like cheese blocks. Power Food Technology has pioneered <strong>Robotic Palletizing</strong> systems for the cheese industry, for over two decades, capable of handling varying block weights. Our solution now offers specialized grippers for bagged or cased cheese, minimizing block drops and reducing energy consumption compared to vacuum grippers. </p> 
<p>Complete palletizing cells provided include robots, purpose-designed grippers, pick stations, pallet build stations, conveyors, wrapping, barcode scanning, safety measures, etc., fully integrated and bespoke to your needs. Robot product options include ABB, FANUC, and KUKA, backed by comprehensive after-sales support, including remote assistance, from Power Food Technology's service department. </p>`;
accordion_b_link_3.href = '';



};


var getandSetAccordions = function(){
let allAccordions = document.querySelectorAll('.is_an_accordion_item_a');
let allAccordions_b = document.querySelectorAll('.is_an_accordion_item_b');


var removeAllActivations = function(passer){
if (passer === 'a'){
    for (var i = 0; i < allAccordions.length; i++) {
    allAccordions[i].classList.remove('activized');
  }
} else if(passer === 'b'){
      for (var i = 0; i < allAccordions_b.length; i++) {
    allAccordions_b[i].classList.remove('activized');
  }
}
};


for (var i = 0; i < allAccordions.length; i++) {
allAccordions[i].addEventListener("click", function(){
  removeAllActivations('a');
    this.classList.toggle('activized');
});
}


for (var i = 0; i < allAccordions_b.length; i++) {
allAccordions_b[i].addEventListener("click", function(){
  removeAllActivations('b');
    this.classList.toggle('activized');
});
}

};


accordion_a_contentSetUp();
accordion_b_contentSetUp();
getandSetAccordions();
};




function threeBoxes(){
const threebox_image_1 = document.getElementById('threebox_image_1');
const threebox_image_2 = document.getElementById('threebox_image_2');
const threebox_image_3 = document.getElementById('threebox_image_3');

const threebox_title_1 = document.getElementById('threebox_title_1');
const threebox_title_2 = document.getElementById('threebox_title_2');
const threebox_title_3 = document.getElementById('threebox_title_3');

const threebox_content_1 = document.getElementById('threebox_textzone_1');
const threebox_content_2 = document.getElementById('threebox_textzone_2');
const threebox_content_3 = document.getElementById('threebox_textzone_3');

threebox_image_1.style.backgroundImage = 'url(https://i.ibb.co/gzrPX29/Group-448.png)';
threebox_image_2.style.backgroundImage = 'url(https://i.ibb.co/k3HDPLp/Path-279.png)';
threebox_image_3.style.backgroundImage = 'url(https://i.ibb.co/N14X4hp/Path-283.png)';

threebox_title_1.innerHTML = 'Design & Build';
threebox_title_2.innerHTML = 'Support';
threebox_title_3.innerHTML = 'Repair';



threebox_content_1.innerHTML = `At Power Food Technology, we bring industry expertise, collaboration, and a commitment to excellence. Being natural problem solvers, we thrive on providing solutions to our customers' challenges. We specialize in designing, constructing, and installing customized solutions tailored to meet your specific cheese automation needs that are recognized for reliability, durability, and simplicity of operation.`;
threebox_content_2.innerHTML = `Power Food Technology provides customers with a comprehensive range of options for preventive maintenance and support. We offer scheduled service visits, replacement of worn parts, and equipment condition reports, along with a comprehensive remote support option, all aimed at ensuring the maximum performance of our machines and assisting our clients in achieving optimal line efficiency. `;
threebox_content_3.innerHTML = `In the unlikely event of a customer breakdown, a fast and efficient repair service is essential. At Power Food Technology, along with our remote support options, our spare parts department maintain a comprehensive stock of essential spares and with prompt worldwide delivery. We believe that surpassing expectations is not just a goal, but a commitment.`;
}

var personContent = function(){
const person_name_1 = document.getElementById('person_name_1');
const person_title_1 = document.getElementById('person_title_1');
const linked_zone_1 = document.getElementById('linked_zone_1');
const email_zone_1 = document.getElementById('email_zone_1');
const person_image_1 = document.getElementById('person_image_1');
const person_link_1 = document.getElementById('person_link_1');
const person_href_1 = document.getElementById('person_href_1');

const person_name_2 = document.getElementById('person_name_2');
const person_title_2 = document.getElementById('person_title_2');
const linked_zone_2 = document.getElementById('linked_zone_2');
const email_zone_2 = document.getElementById('email_zone_2');
const person_image_2 = document.getElementById('person_image_2');
const person_link_2 = document.getElementById('person_link_2');
const person_href_2 = document.getElementById('person_href_2');


person_name_1.innerHTML = 'John Power';
person_title_1.innerHTML = 'Managing Director';
linked_zone_1.href = 'https://www.linkedin.com/in/john-power-80517b29/';
email_zone_1.innerHTML = 'john.power@pft.ie';
person_image_1.style.backgroundImage = 'url(https://i.ibb.co/Cns8BC6/staff-john.png )';
person_link_1.href='https://www.linkedin.com/in/john-power-80517b29/';
person_href_1.href='mailto:john.power@pft.ie';



person_name_2.innerHTML = 'Jim Frost';
person_title_2.innerHTML = 'Product Manager';
linked_zone_2.href = 'https://www.linkedin.com/in/jimfrost1/';
email_zone_2.innerHTML = 'jim.frost@pft.ie';
person_image_2.style.backgroundImage = 'url(https://i.ibb.co/vDjgBBh/staff-jim-frost.png)';
person_link_2.href='https://www.linkedin.com/in/jimfrost1/';
person_href_2.href='mailto:jim.frost@pft.ie';

};



personContent();
threeBoxes();
accordionContent();
