document.addEventListener("DOMContentLoaded", async () => {
    try {
        const res = await fetch("http://localhost:8080/tweets");
        if (res.status === 401) {
            res.redirect("/log-in");
            return;
        }
        const { tweets } = await res.json();
        let tweetsContainer = document.querySelector('#tweets-container');
        let tweetsHtml = tweets.map(({ message }) =>
            `
        <div class="card">
          <div class="card-body">
            <p class="card-text">${message}</p>
          </div>
        </div>
      `
        );
        tweetsContainer.innerHTML = tweetsHtml.join("");

    } catch (e) {
        console.error(e);
    }
})
