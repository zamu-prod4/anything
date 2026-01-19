function loadArticle(name) {
    const article = articles[name];
    if (!article) {
        document.getElementById("article-image").hidden = true;
        document.getElementById("article-caption").hidden = true;
        document.getElementById("stub").hidden = true;

        document.getElementById("article-title").textContent = "Oops!";
        document.getElementById("article-content").innerHTML = "The article you were looking for doesn't exist.<br><br><a href='?article=home' to='home' class='link'>Back to home</a>";
        document.title = '404 - ROOMS: DIVERSE WIKI';

        document.querySelectorAll("a.link").forEach(link => {
            link.addEventListener("click", e => {
                e.preventDefault();
                const href = link.getAttribute("to");

                history.pushState(null, "", `?article=${href}`);
                transitionToArticle(href);
            });
        });

        return;
    }

    document.getElementById("article-title").textContent = article.title;

    if (article.image) {
        document.getElementById("article-image").hidden = false;
        document.getElementById("article-caption").hidden = false;

        const img = document.getElementById("article-image");
        img.src = article.image;
        img.alt = article.image;

        document.getElementById("article-caption").textContent = article.caption;
    } else {
        document.getElementById("article-image").hidden = true;
        document.getElementById("article-caption").hidden = true;
    }
    if (article.tags) {
        document.getElementById("stub").hidden = !article.tags.includes("incomplete");
    } else {
        document.getElementById("stub").hidden = true;
    }
    document.getElementById("article-content").innerHTML = article.content;
    document.title = name == "home" ? "ROOMS: DIVERSE WIKI" : article.title + " - ROOMS: DIVERSE WIKI";

    document.querySelectorAll("a.link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const href = link.getAttribute("to");

            history.pushState(null, "", `?article=${href}`);
            transitionToArticle(href);
        });
    });

    const buttons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            contents.forEach(content => {
                if (content.id === "tab-" + target) {
                    content.classList.remove("hidden");
                } else {
                    content.classList.add("hidden");
                }
            });
        });
    });
}

function search(query, index, maxResults = 4) {
    const results = [];

    const q = query.toLowerCase();

    for (const [id, terms] of Object.entries(index)) {
        let score = 0;

        for (const term of terms) {
            const termLower = term.toLowerCase();

            if (termLower === q) {
                score += 2;
            } else if (termLower.includes(q)) {
                score += 1;
            } else {
                let matchLength = 0;
                for (let i = 0; i < q.length; i++) {
                    if (termLower.includes(q[i])) matchLength++;
                }
                score += matchLength;
            }
        }

        if (score > 0) {
            results.push({ id, score });
        }
    }

    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults)
        .map(r => r.id);
}

async function transitionToArticle(name) {
    const container = document.getElementById("article-container");
    container.classList.add("fade-out");

    setTimeout(() => {
        loadArticle(name);
        window.scrollTo(0, 0);
        container.classList.remove("fade-out");
        container.classList.add("fade-in");

        setTimeout(() => {
            container.classList.remove("fade-in");
        }, 500);
    }, 500);
}

const articleName = getQueryParam("article") || "home";
transitionToArticle(articleName);
