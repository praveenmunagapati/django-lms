function confirmDelete() {
    return confirm("Are you sure?");
}

function searchFilter() {
    var filter = $("#search").val();
    $(':checkbox').each(function() {
        if ($(this).parent().text().indexOf(filter) == 1 || !filter) {
            $(this).show();
            $(this).parent().show();
        } else {
            $(this).hide();
            $(this).parent().hide();
        }
    });
}

function stylizeInputs() {
    $("input:not(:checkbox, :radio), textarea, #id_category")
        .addClass('form-control');
}

function stylizeOthers() {
    $(".helptext").addClass('help-block');
    $('#id_active_from, #id_active_to').datetimepicker();
    $('.alert-error').removeClass('alert-error').addClass('alert-danger');
    $(".alert").delay(10000).fadeOut(1000);
}

stylizeInputs();
stylizeOthers();

$(document).on('click', '#add-choice', function() {
    stylizeInputs();
});