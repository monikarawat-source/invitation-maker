document.addEventListener("DOMContentLoaded", function () {

  let selectedEvent = "";
  let selectedTemplate = "";
  let selectedOrientation = "portrait";
  let selectedFilter = "All";
  let uploadedImage = "";


  const screens = [
    document.getElementById("cmpStep1"),
    document.getElementById("cmpStep2"),
    document.getElementById("cmpStep3"),
    document.getElementById("cmpStep4")
  ];


  const templates = {

    birthday: [

      {
        id: "birthday-confetti",
        name: "Birthday Confetti",
        filter: "Fun",
        bg: "linear-gradient(135deg,#fff1bd,#ffd4e4,#d8edff)",
        color: "#55364c",
        border: "5px solid #ff9fbe",
        accent1: "#ff89ae",
        accent2: "#70c4ee",
        top: "🎈 🎉 🎂",
        bottom: "🎊 ✨ 🎈"
      },

      {
        id: "birthday-elegant",
        name: "Elegant Birthday",
        filter: "Elegant",
        bg: "linear-gradient(145deg,#fffaf0,#ead9c7)",
        color: "#544033",
        border: "6px double #c39b6a",
        accent1: "#d5b38c",
        accent2: "#ead8c0",
        top: "✦ 🎂 ✦",
        bottom: "✦ CELEBRATE ✦"
      },

      {
        id: "birthday-pastel",
        name: "Pastel Party",
        filter: "Pastel",
        bg: "linear-gradient(145deg,#ebe4ff,#ffe7f3,#e2f7ff)",
        color: "#5e4c73",
        border: "4px solid #c8b7eb",
        accent1: "#d3b8ef",
        accent2: "#abd9ee",
        top: "✨ 🎁 ✨",
        bottom: "🎈 HAPPY BIRTHDAY 🎈"
      },

      {
        id: "birthday-modern",
        name: "Modern Birthday",
        filter: "Modern",
        bg: "linear-gradient(145deg,#eef5ff,#dfe8ff)",
        color: "#263956",
        border: "4px solid #7e9fcf",
        accent1: "#6f91c5",
        accent2: "#a5bce0",
        top: "★ 🎂 ★",
        bottom: "CELEBRATE"
      }

    ],


    wedding: [

      {
        id: "wedding-floral",
        name: "Ivory Floral",
        filter: "Floral",
        bg: "linear-gradient(145deg,#fffdf8,#f7eee7)",
        color: "#5c473d",
        border: "3px solid #dfcfc1",
        accent1: "#d9b4bd",
        accent2: "#b9caaa",
        top: "🌿 🌸 🌿",
        bottom: "🌿 ♡ 🌿"
      },

      {
        id: "wedding-botanical",
        name: "Botanical Green",
        filter: "Floral",
        bg: "linear-gradient(145deg,#f7f4e9,#dfe9d8)",
        color: "#46543f",
        border: "6px double #8fa181",
        accent1: "#aec19f",
        accent2: "#879d78",
        top: "🌿 🤍 🌿",
        bottom: "❀ TOGETHER ❀"
      },

      {
        id: "wedding-luxury",
        name: "Black & Gold",
        filter: "Luxury",
        bg: "linear-gradient(145deg,#171412,#40342b)",
        color: "#eed7a0",
        border: "4px solid #b7975a",
        accent1: "#806532",
        accent2: "#b7975a",
        top: "✦ 💍 ✦",
        bottom: "✦ FOREVER ✦"
      },

      {
        id: "wedding-minimal",
        name: "Minimal White",
        filter: "Minimal",
        bg: "linear-gradient(145deg,#ffffff,#f8f8f5)",
        color: "#343434",
        border: "1px solid #d8d8d2",
        accent1: "#e6e6df",
        accent2: "#d7d7ce",
        top: "♡",
        bottom: "TOGETHER"
      }

    ],


    baby: [

      {
        id: "baby-cloud",
        name: "Cloud & Balloon",
        filter: "Cute",
        bg: "linear-gradient(180deg,#ddf5ff,#fce9f3)",
        color: "#596278",
        border: "4px solid #ddc5dc",
        accent1: "#cbeaf6",
        accent2: "#f4ccdd",
        top: "☁️ 🎈 ☁️",
        bottom: "🧸 ⭐ 🌙"
      },

      {
        id: "baby-teddy",
        name: "Teddy Neutral",
        filter: "Neutral",
        bg: "linear-gradient(145deg,#faf3df,#e9efe3)",
        color: "#5b6254",
        border: "5px dashed #bdc8ae",
        accent1: "#ded3b6",
        accent2: "#bbc9ac",
        top: "🧸 🌿 🧸",
        bottom: "⭐ BABY ⭐"
      },

      {
        id: "baby-moon",
        name: "Moon & Stars",
        filter: "Pastel",
        bg: "linear-gradient(145deg,#fff3dd,#f9e3f2,#e8e5ff)",
        color: "#655675",
        border: "6px double #c6b3dc",
        accent1: "#ded1ed",
        accent2: "#f3d9bc",
        top: "🌙 ⭐ ☁️",
        bottom: "LITTLE ONE"
      }

    ],


    graduation: [

      {
        id: "graduation-navy",
        name: "Navy & Gold",
        filter: "Classic",
        bg: "linear-gradient(145deg,#07111f,#1c2b43)",
        color: "#f4d677",
        border: "6px solid #d0ac48",
        accent1: "#23395b",
        accent2: "#b9923a",
        top: "🎓 ★ 🎓",
        bottom: "★ CLASS OF 2026 ★"
      },

      {
        id: "graduation-cream",
        name: "Classic Cream",
        filter: "Classic",
        bg: "linear-gradient(145deg,#faf6e9,#e8ddbc)",
        color: "#272727",
        border: "6px double #aa8b3e",
        accent1: "#d9c798",
        accent2: "#eadbb5",
        top: "🎓 ✦ 🎓",
        bottom: "CONGRATULATIONS"
      },

      {
        id: "graduation-maroon",
        name: "Maroon Graduate",
        filter: "Modern",
        bg: "linear-gradient(145deg,#3b1018,#731f2d)",
        color: "#f5db95",
        border: "5px solid #c9a050",
        accent1: "#691b28",
        accent2: "#aa843c",
        top: "★ 🎓 ★",
        bottom: "THE NEXT CHAPTER"
      }

    ]

  };


  const genericTemplates = {

    housewarming: [
      ["Botanical Home","#faf5e9","#526046","#a5b493","🌿 🏡 🌿"],
      ["Warm Terracotta","#fff0e2","#654c3c","#bb8c6c","🏠 ✦ 🏠"],
      ["Modern Home","#eaf1ec","#355046","#759789","⌂ HOME ⌂"]
    ],

    dinner: [
      ["Wine Evening","#392127","#f0dcb8","#ae895b","✦ 🍷 ✦"],
      ["Emerald Dinner","#17322b","#e4d2a7","#9b8251","✦ 🍽️ ✦"],
      ["Neutral Dinner","#efe2cf","#594434","#b38a67","🍷 DINNER 🍷"]
    ],

    retirement: [
      ["Gold Celebration","#f7e8c8","#65502d","#bea15d","🥂 ✨ 🥂"],
      ["Navy Retirement","#17263b","#efd17e","#af8d40","★ CHEERS ★"],
      ["Soft Classic","#f6e5df","#684b45","#c29b88","🥂 CELEBRATE 🥂"]
    ],

    promotion: [
      ["Achievement Blue","#edf4ff","#293954","#819bca","🏆 ✨ 🎉"],
      ["Executive Navy","#172940","#f0d37b","#9d833f","★ SUCCESS ★"],
      ["Celebration Gold","#ffe8ba","#65451e","#c89646","🏆 WELL DONE 🏆"]
    ],

    opening: [
      ["Grand Opening","#ffe5d2","#633624","#c27d58","✂️ 🎀 ✨"],
      ["Ribbon Red","#70151d","#ffe1a5","#cfa157","🎀 GRAND OPENING 🎀"],
      ["Premium Opening","#eee0ca","#543c2d","#b48b55","✦ OPENING ✦"]
    ],

    professional: [
      ["Corporate Blue","#eef3f9","#263953","#5a779b","◆ EVENT ◆"],
      ["Executive Dark","#152941","#ffffff","#6f8aaa","◆ BUSINESS ◆"],
      ["Clean Professional","#f4f5f7","#292929","#8b8f96","◆ ◆ ◆"]
    ]

  };


  Object.keys(genericTemplates).forEach(function(event) {

    templates[event] =
      genericTemplates[event].map(function(item,index) {

        return {
          id:event + "-" + index,
          name:item[0],
          filter:index === 0 ? "Classic" : index === 1 ? "Modern" : "Elegant",
          bg:"linear-gradient(145deg," + item[1] + ",#ffffff)",
          color:item[2],
          border:"4px solid " + item[3],
          accent1:item[3],
          accent2:item[1],
          top:item[4],
          bottom:item[4]
        };

      });

  });


  function showStep(number) {

    screens.forEach(function(screen,index) {
      screen.classList.toggle("active",index === number - 1);
    });

    document
      .querySelectorAll(".cmp-step-indicator")
      .forEach(function(step,index) {

        step.classList.toggle(
          "active",
          index <= number - 1
        );

      });

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });

  }


  document
    .querySelectorAll(".cmp-event-card")
    .forEach(function(button) {

      button.addEventListener("click",function() {

        selectedEvent = this.dataset.event;

        selectedFilter = "All";

        renderFilters();

        renderTemplates();

        document.getElementById("cmpTemplateHeading").textContent =
          "Choose your " +
          getEventName(selectedEvent) +
          " template";

        showStep(2);

      });

    });


  function renderFilters() {

    const filters = ["All"];

    templates[selectedEvent].forEach(function(template) {

      if (!filters.includes(template.filter)) {
        filters.push(template.filter);
      }

    });

    const container =
      document.getElementById("cmpThemeFilters");

    container.innerHTML = "";

    filters.forEach(function(filter) {

      const button =
        document.createElement("button");

      button.type = "button";

      button.className =
        "cmp-theme-filter" +
        (filter === selectedFilter ? " active" : "");

      button.textContent = filter;

      button.addEventListener("click",function() {

        selectedFilter = filter;

        renderFilters();

        renderTemplates();

      });

      container.appendChild(button);

    });

  }


  function renderTemplates() {

    const grid =
      document.getElementById("cmpTemplateGrid");

    grid.innerHTML = "";

    const list =
      templates[selectedEvent].filter(function(template) {

        return (
          selectedFilter === "All" ||
          template.filter === selectedFilter
        );

      });


    list.forEach(function(template) {

      const card =
        document.createElement("div");

      card.className =
        "cmp-template-card";


      const preview =
        document.createElement("div");

      preview.className =
        "cmp-template-preview";

      preview.style.background =
        template.bg;

      preview.style.color =
        template.color;

      preview.style.border =
        template.border;

      preview.innerHTML =
        "<div><strong>" +
        template.name +
        "</strong><span>" +
        template.top +
        "</span></div>";


      const info =
        document.createElement("div");

      info.className =
        "cmp-template-info";

      info.innerHTML =
        "<strong>" +
        template.name +
        "</strong><small>" +
        template.filter +
        "</small>";


      const useButton =
        document.createElement("button");

      useButton.type = "button";

      useButton.className =
        "cmp-use-template";

      useButton.textContent =
        "Use This Template";


      useButton.addEventListener("click",function() {

        selectedTemplate =
          template.id;

        updateFormFields();

        showStep(3);

      });


      info.appendChild(useButton);

      card.appendChild(preview);

      card.appendChild(info);

      grid.appendChild(card);

    });

  }


  document
    .querySelectorAll(".cmp-orientation")
    .forEach(function(button) {

      button.addEventListener("click",function() {

        document
          .querySelectorAll(".cmp-orientation")
          .forEach(function(item) {

            item.classList.remove("active");

          });

        this.classList.add("active");

        selectedOrientation =
          this.dataset.orientation;

      });

    });


  function updateFormFields() {

    const label =
      document.getElementById("cmpNameLabel");

    const input =
      document.getElementById("cmpName");

    const extra =
      document.getElementById("cmpExtraFields");


    extra.innerHTML = "";


    if (selectedEvent === "birthday") {

      label.textContent =
        "Birthday Person's Name";

      input.placeholder =
        "Example: Riya";

      extra.innerHTML =
        '<label>Age</label>' +
        '<input id="cmpAge" type="number" placeholder="Example: 25">';

    }


    else if (selectedEvent === "wedding") {

      label.textContent =
        "First Name";

      input.placeholder =
        "Example: Riya";

      extra.innerHTML =
        '<label>Partner Name</label>' +
        '<input id="cmpPartner" type="text" placeholder="Example: Arjun">';

    }


    else if (selectedEvent === "baby") {

      label.textContent =
        "Parent / Family Name";

    }


    else if (selectedEvent === "graduation") {

      label.textContent =
        "Graduate Name";

    }


    else if (selectedEvent === "housewarming") {

      label.textContent =
        "Host / Family Name";

    }


    else if (selectedEvent === "dinner") {

      label.textContent =
        "Host Name";

    }


    else if (selectedEvent === "retirement") {

      label.textContent =
        "Retiree Name";

    }


    else if (selectedEvent === "promotion") {

      label.textContent =
        "Person's Name";

    }


    else if (selectedEvent === "opening") {

      label.textContent =
        "Business Name";

    }


    else {

      label.textContent =
        "Event / Organization Name";

    }

  }


  document
    .getElementById("cmpPhotoUpload")
    .addEventListener("change",function() {

      const file = this.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload =
        function(event) {

          uploadedImage =
            event.target.result;

        };

      reader.readAsDataURL(file);

    });


  document
    .getElementById("cmpCreateInvitation")
    .addEventListener("click",function() {

      const name =
        document.getElementById("cmpName").value.trim();

      const date =
        document.getElementById("cmpDate").value;

      const time =
        document.getElementById("cmpTime").value;

      const venue =
        document.getElementById("cmpVenue").value.trim();


      if (!name || !date || !time || !venue) {

        alert(
          "Please enter name, date, time and venue."
        );

        return;

      }


      let title = name;

      let message =
        "Join us for a special celebration.";


      if (selectedEvent === "birthday") {

        const age =
          document.getElementById("cmpAge")
            ? document.getElementById("cmpAge").value
            : "";

        title =
          age
            ? name +
              "'s " +
              ordinal(age) +
              " Birthday"
            : name + "'s Birthday";

        message =
          "Come celebrate a wonderful birthday filled with fun, laughter and memories!";

      }


      else if (selectedEvent === "wedding") {

        const partner =
          document.getElementById("cmpPartner")
            ? document.getElementById("cmpPartner").value.trim()
            : "";

        title =
          partner
            ? name + " & " + partner
            : name;

        message =
          "Together with their families, invite you to celebrate their wedding.";

      }


      else if (selectedEvent === "baby") {

        title =
          "Baby Shower";

        message =
          "A little bundle of joy is on the way. Join us in celebrating " +
          name +
          "!";

      }


      else if (selectedEvent === "graduation") {

        title =
          name + "'s Graduation";

        message =
          "Join us in celebrating this wonderful achievement.";

      }


      else if (selectedEvent === "housewarming") {

        title =
          "Housewarming Party";

        message =
          name +
          " warmly invites you to celebrate a new home.";

      }


      else if (selectedEvent === "dinner") {

        title =
          "Dinner Party";

        message =
          "Join " +
          name +
          " for an evening of food and good company.";

      }


      else if (selectedEvent === "retirement") {

        title =
          name +
          "'s Retirement Celebration";

      }


      else if (selectedEvent === "promotion") {

        title =
          "Promotion Celebration";

        message =
          "Let's celebrate " +
          name +
          " and this exciting achievement!";

      }


      else if (selectedEvent === "opening") {

        title =
          name +
          " Grand Opening";

      }


      document.getElementById("cmpTitle").textContent =
        title;

      document.getElementById("cmpMessage").textContent =
        message;


      document.getElementById("cmpDateOutput").textContent =
        new Date(
          date + "T00:00:00"
        ).toLocaleDateString(
          "en-US",
          {
            weekday:"long",
            year:"numeric",
            month:"long",
            day:"numeric"
          }
        );


      document.getElementById("cmpTimeOutput").textContent =
        formatTime(time);


      document.getElementById("cmpVenueOutput").textContent =
        venue;


      document.getElementById("cmpAddressOutput").textContent =
        document.getElementById("cmpAddress").value;


      document.getElementById("cmpCustomOutput").textContent =
        document.getElementById("cmpCustomMessage").value;


      const rsvp =
        document.getElementById("cmpRsvp").value;


      document.getElementById("cmpRsvpOutput").textContent =
        rsvp ? "RSVP • " + rsvp : "";


      if (uploadedImage) {

        document.getElementById("cmpUploadedPhoto").src =
          uploadedImage;

        document.getElementById("cmpPhotoWrap").style.display =
          "block";

      }


      applySelectedTemplate();

      showStep(4);

    });


  function applySelectedTemplate() {

    const template =
      templates[selectedEvent].find(
        function(item) {
          return item.id === selectedTemplate;
        }
      ) || templates[selectedEvent][0];


    const invitation =
      document.getElementById("cmpInvitation");


    invitation.className =
      "cmp-invitation " +
      selectedOrientation;


    invitation.style.background =
      template.bg;


    invitation.style.color =
      template.color;


    invitation.style.border =
      template.border;


    document.getElementById("cmpTopGraphic").textContent =
      template.top;


    document.getElementById("cmpBottomGraphic").textContent =
      template.bottom;


    document.querySelector(".cmp-decoration-one").style.background =
      template.accent1;


    document.querySelector(".cmp-decoration-two").style.background =
      template.accent2;


    document.getElementById("cmpTextColor").value =
      rgbSafeColor(template.color);

  }


  document.getElementById("cmpChangeTemplate")
    .addEventListener("click",function() {

      showStep(2);

    });


  document.getElementById("cmpEditDetails")
    .addEventListener("click",function() {

      showStep(3);

    });


  document.getElementById("cmpBackEvent")
    .addEventListener("click",function() {

      showStep(1);

    });


  document.getElementById("cmpBackTemplates")
    .addEventListener("click",function() {

      showStep(2);

    });


  document.getElementById("cmpFont")
    .addEventListener("change",function() {

      document.getElementById("cmpInvitation").style.fontFamily =
        this.value;

    });


  document.getElementById("cmpTextColor")
    .addEventListener("input",function() {

      document.getElementById("cmpInvitation").style.color =
        this.value;

    });


  document
    .querySelectorAll(".cmp-align-controls button")
    .forEach(function(button) {

      button.addEventListener("click",function() {

        document
          .querySelectorAll(".cmp-align-controls button")
          .forEach(function(item) {
            item.classList.remove("active");
          });

        this.classList.add("active");

        const align =
          this.dataset.align;

        const invitation =
          document.getElementById("cmpInvitation");

        invitation.style.textAlign =
          align;

        invitation.style.alignItems =
          align === "left"
            ? "flex-start"
            : align === "right"
            ? "flex-end"
            : "center";

      });

    });


  document.getElementById("cmpCirclePhoto")
    .addEventListener("click",function() {

      const photo =
        document.getElementById("cmpPhotoWrap");

      photo.classList.remove("square");

      photo.classList.add("circle");

    });


  document.getElementById("cmpSquarePhoto")
    .addEventListener("click",function() {

      const photo =
        document.getElementById("cmpPhotoWrap");

      photo.classList.remove("circle");

      photo.classList.add("square");

    });


  document.getElementById("cmpRemovePhoto")
    .addEventListener("click",function() {

      uploadedImage = "";

      document.getElementById("cmpPhotoWrap").style.display =
        "none";

      document.getElementById("cmpUploadedPhoto").src =
        "";

      document.getElementById("cmpPhotoUpload").value =
        "";

    });


  document.getElementById("cmpDownload")
    .addEventListener("click",function() {

      if (typeof html2canvas === "undefined") {

        alert(
          "Download tool is still loading. Please try again."
        );

        return;

      }


      const invitation =
        document.getElementById("cmpInvitation");


      html2canvas(
        invitation,
        {
          scale:2,
          useCORS:true,
          backgroundColor:null
        }
      )
      .then(function(canvas) {

        const link =
          document.createElement("a");

        link.download =
          "createmypostly-" +
          selectedEvent +
          "-invitation.png";

        link.href =
          canvas.toDataURL("image/png");

        link.click();

      });

    });


  function getEventName(event) {

    const names = {
      birthday:"Birthday",
      wedding:"Wedding",
      baby:"Baby Shower",
      graduation:"Graduation",
      housewarming:"Housewarming",
      dinner:"Dinner Party",
      retirement:"Retirement",
      promotion:"Promotion",
      opening:"Grand Opening",
      professional:"Professional Event"
    };

    return names[event];

  }


  function formatTime(value) {

    const parts =
      value.split(":");

    let hour =
      parseInt(parts[0],10);

    const minute =
      parts[1];

    const period =
      hour >= 12 ? "PM" : "AM";

    hour =
      hour % 12 || 12;

    return (
      hour +
      ":" +
      minute +
      " " +
      period
    );

  }


  function ordinal(value) {

    value =
      parseInt(value,10);

    const mod =
      value % 100;

    if (mod >= 11 && mod <= 13) {
      return value + "th";
    }

    switch (value % 10) {

      case 1:
        return value + "st";

      case 2:
        return value + "nd";

      case 3:
        return value + "rd";

      default:
        return value + "th";

    }

  }


  function rgbSafeColor(color) {

    if (
      color &&
      color.startsWith("#") &&
      (
        color.length === 7 ||
        color.length === 4
      )
    ) {
      return color;
    }

    return "#333333";

  }

});
