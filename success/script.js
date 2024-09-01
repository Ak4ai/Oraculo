document.addEventListener('DOMContentLoaded', function () {
    // Sample Data for Feeds and Messages
    const feeds = [
        { id: 'a0cc', name: 'Watson', unread: 5 },
        { id: 'b0dd', name: 'Heywood', unread: 3 }
    ];

    const conversations = [
        { id: 'c0ee', name: 'John Doe', unread: 2, isOnline: true },
        { id: 'd0ff', name: 'Jane Smith', unread: 0, isOnline: false }
    ];

    const messages = [
        {
            text: "I got a gig lined up in Watson, no biggie. If you prove useful, expect more side gigs coming your way. I need a half-decent netrunner. Hit me up, provide credentials, eddies on completion.",
            author: "V. M. Vargas",
            time: "11:04pm"
        }
    ];

    // Injecting Feeds
    const feedsList = document.getElementById('feeds-list');
    feeds.forEach(feed => {
        const li = document.createElement('li');
        li.classList.add('nav__item');
        li.innerHTML = `<a class="nav__link ${feed.unread > 0 ? 'nav__link--active' : ''}" href="#">#${feed.name} (${feed.unread})</a>`;
        feedsList.appendChild(li);
    });

    // Injecting Conversations
    const directMessagesList = document.getElementById('direct-messages');
    conversations.forEach(convo => {
        const li = document.createElement('li');
        li.classList.add('nav__item');
        li.innerHTML = `<a class="nav__link ${convo.unread > 0 ? 'nav__link--active' : ''}" href="#">${convo.name} (${convo.unread}) ${convo.isOnline ? '🟢' : '🔴'}</a>`;
        directMessagesList.appendChild(li);
    });

    // Injecting Messages
    const messageBody = document.querySelector('.channel-feed__body');
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<div class="message__body">${msg.text}</div><div class="message__footer">${msg.author} - ${msg.time}</div>`;
        messageBody.appendChild(div);
    });
});
