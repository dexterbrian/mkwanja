<script>
    import defaultProfileImage from '../../lib/images/3d-assets/3d-profile-default/3d-profile-default.png';
    import './home.css';
</script>

<div id="main-container">
    <div id="ui">
        <div id="profile-container">
            <img id="profile-pic" alt="default-profile" src={defaultProfileImage}>
            <div id="profile-info">
                <h4 id="name">Dexter</h4>
                <p id="amount-saved">Saved <strong>KES 189K / KES 1M</strong></p>
            </div>
            <div id="edit-profile-container">
                <div id="edit-profile-button">
                    <svg id="edit-icon" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path fill="#4b4efc" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
                </div>
            </div>
        </div>
        <div id="month"><strong>Dec 2023</strong></div>
    </div>
</div>
