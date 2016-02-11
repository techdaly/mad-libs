
  $("#blanks form").submit(function(event) {
    var friendInput = $("input#friend").val();
    var friendgenderInput = $("input#friendgender").val();
    var friendgenderpoInput = $("input#friendgenderpo").val();
    var friendhairInput = $("input#friendhair").val();
    var romancenameInput = $("input#romancename").val();
    var romancegenderInput = $("input#romancegender").val();
    var romancegenderpoInput = $("input#romancegenderpo").val();
    var eyecolorInput = $("input#eyecolor").val();
    var objectInput = $("input#object").val();
    var instrumentInput = $("input#instrument").val();
    var locationInput = $("input#location").val();

    $(".friend").text(friendInput);
    $(".friendgender").text(friendgenderInput);
    $(".friendgenderpo").text(friendgenderpoInput);
    $(".friendhair").text(friendhairInput);
    $(".romancename").text(romancenameInput);
    $(".romancegender").text(romancegenderInput);
    $(".romancegenderpo").text(romancegenderpoInput);
    $(".eyecolor").text(eyecolorInput);
    $(".object").text(objectInput);
    $(".instrument").text(instrumentInput);
    $(".location").text(locationInput);

    $("#story").show();

    event.preventDefault();
  });
