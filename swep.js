        function displayBiodata() {
            var name = document.getElementById("name").value;
            var matriculationNumber = document.getElementById("matriculationNumber").value;
            var department = document.getElementById("department").value;
            var dateOfBirth = document.getElementById("dateOfBirth").value;
            var gender = document.getElementById("gender").value;
            var homeAddress = document.getElementById("homeAddress").value;
            var nextOfKin = document.getElementById("nextOfKin").value;
            var town = document.getElementById("town").value;
            var country = document.getElementById("country").value;

            var biodataContainer = document.getElementById("biodataContainer");

            biodataContainer.innerHTML = "<h2>Biodata:</h2>" +
                "<p><span class='biodata-label'>Name:</span> " + name + "</p>" +
                "<p><span class='biodata-label'>Matriculation Number:</span> " + matriculationNumber + "</p>" +
                "<p><span class='biodata-label'>Department:</span> " + department + "</p>" +
                "<p><span class='biodata-label'>Date of Birth:</span> " + dateOfBirth + "</p>" +
                "<p><span class='biodata-label'>Gender:</span> " + gender + "</p>" +
                "<p><span class='biodata-label'>Home Address:</span> " + homeAddress + "</p>" +
                "<p><span class='biodata-label'>Next of Kin:</span> " + nextOfKin + "</p>" +
                "<p><span class='biodata-label'>Town:</span> " + town + "</p>" +
                "<p><span class='biodata-label'>Country:</span> " + country + "</p>";
        }

        function downloadBiodata() {
            var name = document.getElementById("name").value;
            var matriculationNumber = document.getElementById("matriculationNumber").value;
            var department = document.getElementById("department").value;
            var dateOfBirth = document.getElementById("dateOfBirth").value;
            var gender = document.getElementById("gender").value;
            var homeAddress = document.getElementById("homeAddress").value;
            var nextOfKin = document.getElementById("nextOfKin").value;
            var town = document.getElementById("town").value;
            var country = document.getElementById("country").value;

            var biodataText =
                "Name: " + name + "\n" +
                "Matriculation Number: " + matriculationNumber + "\n" +
                "Department: " + department + "\n" +
                "Date of Birth: " + dateOfBirth + "\n" +
                "Gender: " + gender + "\n" +
                "Home Address: " + homeAddress + "\n" +
                "Next of Kin: " + nextOfKin + "\n" +
                "Town: " + town + "\n" +
                "Country: " + country;

            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(biodataText));
            element.setAttribute('download', 'biodata.txt');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }