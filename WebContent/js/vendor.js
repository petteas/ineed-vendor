/**
 * Created by nemanjaa on 4/26/15.
 */

var REST_DATA = 'api/vendors'

function addVendor(){
    var data = {
        vendorName: document.getElementById("company_name").value,
        addressLine: document.getElementById("adress_line1").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").options[document.getElementById("state").selectedIndex].text,
        latitude: 0,
        longitude: 0,
        vendorEmail: document.getElementById("email").value,
        vendorType : document.getElementById("vendor_type").options[document.getElementById("vendor_type").selectedIndex].text
    };

    xhrPost(REST_DATA,data,function(){
        //callback function
        console.log("POST"+data);
        location.href = 'success.html';
    },function(err){
        console.error(err);
    });

    return false;
}