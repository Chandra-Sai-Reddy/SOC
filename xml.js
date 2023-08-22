document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", saveReservationData);
});

function saveReservationData() {
    const Name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const location = document.getElementById("location").value;
    const interest = document.getElementById("interest").value;

    const xmlString = `
        <details>
            <fullName >${Name}</fullName>
            <email >${email}</email>
            <location  >${location}</location>
            <interest >${interest}</interest>
        </details>
    `;

    const blob = new Blob([xmlString], { type: "application/xml" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "details.xml";
    link.click();
}