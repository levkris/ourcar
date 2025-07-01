fetch('/drivers-teams.json')
  .then(response => response.json())
  .then(data => {
    const driversTeamsContent = document.querySelector('.drivers-teams');

    data.forEach(team => {
        const teamDiv = document.createElement('div');
        teamDiv.classList.add('team');

        teamDiv.innerHTML = `
            <p class="team-name">${team.team_name}</p>
            <div class="team-members">

            </div>
        `;

        team.team_members.forEach(member => {
            let flagsHtml = '';

            member.flags.forEach(flag => {
                flagsHtml += `<img class="flag" src="/flags/${flag}.png">`;
            });

            let teamMemberHtml = `
                <div class="team-member" onclick="window.open('${member.roblox_url}', '_blank');">
                    <img class="team-member-image" src="${member.member_image}">
                    <div class="car-number-member-name">
                        <p class="team-member-name" target="_blank">${member.name} ${flagsHtml}</p>
                        <p class="car-number">#${member.car_number} | ${member.car_main_sponsor}</p>
                    </div>
                </div>
            `;

            teamDiv.querySelector('.team-members').innerHTML += teamMemberHtml;
        });
        driversTeamsContent.appendChild(teamDiv);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
