function PickPeopleController() {
    var name_list = [];
    $.ajax({
        url: "register_and_signin",
        type: "GET",
        dataType:"json",
        success: function (data) {
            var tempName = doT.template($('#name_tmpl').html());
            var nameText = tempName(data);
            $('#name_list').html(nameText);
        }
    });
}

function SetPeopleName(name) {
    var people = new People(name);
    people.save()
}