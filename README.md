# codeName_ninja

I decided that this would be a local app thus I didn't put it into Netlify or Heroku (or other cloud service).



These are the steps to run app:
1) open *server* folder in separate code-editor window. In terminal write `pwd` to be sure
    that you're in server folder. write there *npm i* - that would install all the packages needed for server.
2) write in terminal *npm run start:dev* to lunch server. When it write 
        *Database connection successful
        Server running on port: 5000*
        that means that server is on.
3) open separate code-editor window for *app* folder. In terminal write `pwd` to be sure
    that you're in app folder. write there *npm i* - that would install all the packages needed for app.
4) write *npm start* to run app. It would take some time for app to build and run.
5) when its done - separate browser tab would open - it is our app.
6) on top of it you can see two underlined links - these are links for pages.
    *Heroes* link - would show you all the heroes you added to database;
    *Edit heroes info or add new hero* - allows you to create new heroes or to edit existing one.
        It consists of two buttons: *register new hero* and *edit a hero*. The first one allows you to create new heroes. Second - allows you to edit heroes. You can easily understand which possibility
        you're using now by paying attention to the buttons - the blue one is current.

How to create new hero:
1) *Edit heroes info or add new hero* -> *register new hero*. Fill all the inputs that are there and choose an image for your hero.
2) after all the fields are filled - push the *submit* button. after a few moment there would appear additional window that would inform you about hero creation is completed.
3) Now you can observe your new hero in *Heroes* page.

How to edit a hero:
1)First thing that you'd see if push the *edit a hero* button is the input field where you should write
    hero's nickname. It would inform you if hero with such nickname doesn't exists.
    After you write it down in the field - press *check hero availability* and it would show new window, 
    which is separated on two parts:
        - left one shows current information about a hero. Pay attention that you can delete images
            if there are more than one of them already exists.
        - right one show form where you can change founded hero's data. Pay attention that all data except
            imagefield will override an existing data. You can choose which field to fill thus you can
            change either one or all data at once.
        After you chose what data to change - press *submit changes* button. It would inform you
            if change was successful
