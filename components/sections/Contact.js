export default function Contact() {
  return (
    <div id="Contact">
        <form method="post">
            <div>
                <label htmlFor="name">Nom</label>
                <input type="text" id="name" name="user_name" />
            </div>
            <div>
                <label htmlFor="mail">e-mail</label>
                <input type="email" id="mail" name="user_mail" />
            </div>
            <div>
                <label htmlFor="msg">Message</label>
                <textarea id="msg" name="user_message"></textarea>
            </div>
            <div className="button">
                <button type="submit">Envoyer</button>
            </div>
        </form>
    </div>

  );
}

