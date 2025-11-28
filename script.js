$(document).ready(function() {
    $("#contactForm").submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        var form = $(this);
        var formData = form.serialize();

        $.ajax({
            type: form.attr('method'),
            url: form.attr('action'),
            data: formData,
            dataType: "json",
            success: function() {
                $("#formMessage").text("Message sent successfully!").css("color","green").show();
                form.trigger("reset"); // Clear form
            },
            error: function() {
                $("#formMessage").text("Oops! There was a problem sending your message.").css("color","red").show();
            }
        });
    });
});
