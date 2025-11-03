$(document).ready(function () {
  console.log("jQuery is working!");

  // PART 1
  $("#update-text").click(function () {
    $("#info-text")
      .text("Text successfully changed using jQuery!")
      .css({
        color: "#fff",
        background: "#0078b7",
        padding: "8px",
        borderRadius: "6px",
      });
  });

  // PART 2 — Effects
  $("#btn-hide").click(() => $(".visibility-text").hide());
  $("#btn-show").click(() => $(".visibility-text").show());
  $("#btn-toggle").click(() => $(".visibility-text").toggle());

  $("#fade-in").click(() => $("#team-logo").fadeIn());
  $("#fade-out").click(() => $("#team-logo").fadeOut());
  $("#fade-toggle").click(() => $("#team-logo").fadeToggle(400));

  $("#panel-trigger").click(() => $("#slide-content").slideToggle(500));

  // PART 3 — DOM Manipulation
  $("#add-task").click(() => $("#task-list").append("<li>New Task Added</li>"));
  $("#remove-task").click(() => $("#task-list li:last").remove());

  $("#swap-img").click(() =>
    $("#player-img").attr("src", "team.png")
  );
  $("#update-link").click(() =>
    $("#player-link")
      .attr("href", "https://jquery.com")
      .text("Visit jQuery Official Site")
  );

  $("#username").keyup(() => $("#live-name").text($("#username").val()));
  $("#useremail").keyup(() => $("#live-email").text($("#useremail").val()));

  // PART 4 — Animations
  $("#move-basic").click(() =>
    $("#square").animate({ left: "200px", top: "0", width: "150px", height: "150px" }, 1000)
  );

  $("#move-sequence").click(() =>
    $("#square")
      .animate({ left: "250px" }, 600)
      .animate({ top: "150px" }, 600)
      .animate({ width: "50px", height: "50px" }, 600)
      .animate({ left: "0", top: "0", width: "100px", height: "100px" }, 600)
  );

  $("#move-combo").click(() =>
    $("#square").animate(
      {
        opacity: 0.6,
        left: "180px",
        width: "120px",
        height: "120px",
      },
      1000
    )
  );

  // PART 5 — Mini Project (Accordion)
  $(".acc-header").click(function () {
    const body = $(this).next(".acc-body");
    $(".acc-body").not(body).slideUp();
    body.slideToggle();
  });
});
