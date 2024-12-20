/**
 * @name TotalRemover
 * @author GraczNet
 * @description ⊰Mostly deleting functionality, although possibility to change stuff⊱
 * @version 0.0.6
 */

module.exports = meta =>
{
  return {
    start: () =>
    {
      AddsButtonToMenu();
      let TotalRemoverValue = "ON";
      ValueCheckerStuffChanger();
    },
    stop: () =>
    {
      clearTimeout(DiscordCheckForSettingsPage);
      ClearStuffWhileOFF();
      let TotalRemoverValue = "OFF";
    },
  }

// ============================================== //
// Adding Remover Button for DC sidebar and other //
// ============================================== //
  // This implements a button, which will appear the Menu, at discord's settings/Tab column.
  function AddsButtonToMenu()
  {
    const DiscordSettingsButtonsColumn = document.querySelector(".side_a0");
    const DiscordCreateMenuButton = document.createElement('div');
    const DiscordMenuButton = document.querySelector(".Total_Remover");

    if (DiscordSettingsButtonsColumn)
    {
      if (!DiscordMenuButton)
      {
        DiscordSettingsButtonsColumn.appendChild(DiscordCreateMenuButton);
        DiscordCreateMenuButton.className = "item_a0 themed_a0 Total_Remover";
        DiscordCreateMenuButton.innerHTML = "Total Remover";
        DiscordCreateMenuButton.setAttribute("data-value", "OFF");
        DiscordCreateMenuButton.setAttribute('role', "tab");
        DiscordCreateMenuButton.setAttribute('tabindex', "-1");
        DiscordCreateMenuButton.setAttribute('aria-label', "Total Remover");
        DiscordCreateMenuButton.setAttribute('title', "Version - 0.0.6");
        DiscordCreateMenuButton.addEventListener('click', TheMenu);
      }
    }
    DiscordCheckForSettingsPage = setTimeout(AddsButtonToMenu, 1000);
  }

  // The Function for displaying: "Remover Settings" Popout/Page.
  function TheMenu()
  {
    const DiscordMenuButton = document.querySelector(".Total_Remover");
    const DiscordGripHolder = document.querySelector(".standardSidebarView_c25c6d");
    const RemoverHolder = document.createElement('div');

    if (DiscordMenuButton.getAttribute("data-value") === "OFF")
    {
      DiscordGripHolder.appendChild(RemoverHolder);
      RemoverHolder.id = "Remover_Holder";
      RemoverHolder.addEventListener('click', CheckIfOnlyHolderClicked);
      DiscordMenuButton.setAttribute("data-value", "ON");
      DiscordMenuButton.classList.add("selected_a0");
      MenuData();
      document.querySelector("#Remover_Exit_Button").addEventListener('click', TheMenu);
      ValueCheckerStuffChanger(); ValueCheckerStuffChanger(); // <- Do not touch, it just works.
    }
    else if (DiscordMenuButton.getAttribute("data-value") === "ON")
    {
      DiscordMenuButton.setAttribute("data-value", "OFF");
      DiscordMenuButton.classList.remove("selected_a0");
      if (document.querySelectorAll("#Remover_Holder"))
      {
        document.querySelectorAll("#Remover_Holder").forEach(object => {object.remove();});
      }
    }
  }

  // Checks if you have clicked the "background" the div id="Remover_Holder", instead of its children elements.
  function CheckIfOnlyHolderClicked()
  {
    const RemoverHolder = document.querySelector("#Remover_Holder");
    if (event.target === RemoverHolder) {TheMenu()}
  }

  // The Function for clearing changes - made while the Plugin was ON state.
  function ClearStuffWhileOFF()
  {
    const DiscordSettingsButtonsColumn = document.querySelector(".side_a0");
    const DiscordMenuButton = document.querySelector(".Total_Remover");
    if (DiscordMenuButton) {DiscordMenuButton.remove()} // Deletes the Menu Button.
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-1"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-2"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-3"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-4"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-5"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-6"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-7"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-8");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-9"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-10"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-11"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-12"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-13"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-14"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-15");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-16"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-17"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-18"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-20"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-21"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-22");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-23"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-24"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-25"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-26"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-27"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-28"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-29");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-30"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-31"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-32"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-33"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-34"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-35"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-36");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-37"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-38"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-39"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-40"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-41"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-42"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-43");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-44"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-45"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-46"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-47"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-48"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-49"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-50");
    BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-51"); BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-52");
  }

// ================================================ //
// The Menu "HTML" Structure for "Remover Settings" //
// ================================================ //
  function MenuData()
  {
    const MenuHolder = document.querySelector("#Remover_Holder");
    MenuHolder.innerHTML = `
    <div id="Remover_Plate">
      <h2 class="bd-settings-title">Total Remover Settings</h2>
      <div id="Remover_Menu_Bar" data-value="TopbarPage">
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'TopbarPage')" style="border-color: rgb(35,165,90); border-radius: var(--radius-sm) var(--radius-sm) 0 0; background-color: var(--background-secondary); cursor: default;">Topbar</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'ServersColumnPage')">Servers Column</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'HomePage')">Home</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'MessagesPage')">Messages</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'MainTextInputPage')">Main Text Input</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'SettingsPage')">Settings</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'AppsPage')">Apps</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'VoiceCallPage')">Voice Call</button>
        <button class="Remover_Menu_Button" onclick="document.querySelector('#Remover_Menu_Bar').setAttribute('data-value', 'MiscellaneousPage')">Miscellaneous</button>
      </div>
      <div id="Scrollbar_Holder">
      <div id="Data_Holder">

        <!-- 1 -->
        <div class="Data_Plate" id="TopbarPage" style="height: fit-content;">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Topbar Elements</label>
            <div class="Options_Plate"> <!-- 47 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">New Group DM Button</div>
                <div class="Option_Description_Text">Removes "New Group DM" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 48 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Inbox Button</div>
                <div class="Option_Description_Text">Removes "Inbox" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 3 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Help Button</div>
                <div class="Option_Description_Text">Removes "Help" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Third_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 9 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Threads Button</div>
                <div class="Option_Description_Text">Removes "Threads" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Ninth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 2 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Notification Button</div>
                <div class="Option_Description_Text">Removes "Notification" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Second_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 49 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Pinned Messages Button</div>
                <div class="Option_Description_Text">Removes "Pinned Messages" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 50 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Hide Member List Button</div>
                <div class="Option_Description_Text">Removes "Hide Member List" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Topbar Additionals</label>
            <div class="Options_Plate"> <!-- 1 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Search Bar</div>
                <div class="Option_Description_Text">Places the search bar on right side.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="First_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 -->

        <div class="Data_Plate" id="ServersColumnPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Servers Column</label>
            <div class="Options_Plate"> <!-- 27 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Discover Button</div>
                <div class="Option_Description_Text">Removes "Discover" button, the one under servers.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 33 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Vanish Server Icons.</div>
                <div class="Option_Description_Text">Removes server icons, displayed on closed server folders.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3 -->

        <div class="Data_Plate" id="HomePage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Home Page</label>
            <div class="Options_Plate"> <!-- 28 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Friends Button</div>
                <div class="Option_Description_Text">Removes Friends button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 29 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text"> Nitro Button</div>
                <div class="Option_Description_Text">Removes Nitro button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 30 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text"> Shop Button</div>
                <div class="Option_Description_Text">Removes Shop button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 4 -->

        <div class="Data_Plate" id="MessagesPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Messages</label>
            <div class="Options_Plate"> <!-- 12 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">3 Fast Emoji Buttons</div>
                <div class="Option_Description_Text">Removes the three fast emojis + its separator.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twelfth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 14 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Forward-to Button</div>
                <div class="Option_Description_Text">Removes the "Forward to" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fourteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Messages > Menubar</label>
            <div class="Options_Plate"> <!-- 13 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Top Emojis Inside Menubar</div>
                <div class="Option_Description_Text">Removes 4 emojis from top of Messages menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 16 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Add Reaction [Tree]</div>
                <div class="Option_Description_Text">Removes "Add Reaction" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Sixteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 26 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">View Reactions</div>
                <div class="Option_Description_Text">Removes "View Reactions" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentysixth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 17 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Edit Message</div>
                <div class="Option_Description_Text">Removes "Edit Message" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Seventeenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 18 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Reply</div>
                <div class="Option_Description_Text">Removes "Reply" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eighteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 15 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Forward</div>
                <div class="Option_Description_Text">Removes "Forward" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 19 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Thread</div>
                <div class="Option_Description_Text">Removes "Create Thread" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Nineteenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 20 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Copy Text</div>
                <div class="Option_Description_Text">Removes "Copy Text" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentieth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 21 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Pin Message</div>
                <div class="Option_Description_Text">Removes "Pin Message" inside menubar.</div>
            </div>
              <div class="Input_Plate">
               <div class="Checkrectangle" id="Twentyfirst_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 22 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Apps [Tree]</div>
                <div class="Option_Description_Text">Removes "Apps" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentysecond_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 23 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Mark Unread</div>
                <div class="Option_Description_Text">Removes "Mark Unread" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentythird_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 24 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Copy Message Link</div>
                <div class="Option_Description_Text">Removes "Copy Message Link" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyfourth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 25 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Speak Message</div>
                <div class="Option_Description_Text">Removes "Speak Message" inside menubar.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Twentyfifth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 5 -->


        <div class="Data_Plate" id="MainTextInputPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Main Text Input</label>
            <div class="Options_Plate"> <!-- 6 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Give Nitro Button</div>
                <div class="Option_Description_Text">Removes Send-gift (nitro) button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Sixth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 7 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Sticker-Picker Button</div>
                <div class="Option_Description_Text">Removes Stickers button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Seventh_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Main Text Input > Inside Plus Button</label>
            <div class="Options_Plate"> <!-- 51 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Upload a File Button</div>
                <div class="Option_Description_Text">Removes "Upload a File" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 8 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Thread Button</div>
                <div class="Option_Description_Text">Removes "Create Thread" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eighth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 52 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Create Poll Button</div>
                <div class="Option_Description_Text">Removes "Create Poll" button, from Menu.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 6 -->

        <div class="Data_Plate" id="SettingsPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Settings Menu Column</label>
            <div class="Options_Plate"> <!-- 34 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Family Centre Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Family Centre" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyfour_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 35 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Connections Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Connections" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyfive_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 36 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Clips Options Tab</div>
                <div class="Option_Description_Text">Under "User Settings", removes "Clips" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtysix_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 37 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Nitro Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Nitro" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyseven_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 38 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Server Boost Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Server Boost" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyeight_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 39 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Subscriptions Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Subscriptions" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtynine_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 40 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Gift Inventory Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Gift Inventory" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Forty_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 41 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Billing Options Tab</div>
                <div class="Option_Description_Text">Under "Payment Settings", removes "Billing" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 42 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Social Bar</div>
                <div class="Option_Description_Text"> Removes bar with DC socials.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 44 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Merch - External Website Link</div>
                <div class="Option_Description_Text">Under close to "Betterdiscord", removes "Merch" link button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyfour_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
          <!--2 Option Holder -->
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Settings > Tabs</label>
            <div class="Options_Plate"> <!-- 43 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Nitro In Options</div>
                <div class="Option_Description_Text">Removes whole Nitro junk from Tabs.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 46 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Funky Following Menu</div>
                <div class="Option_Description_Text">Some pages posses menu Tabs - on top, make them scroll following you #_#.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortysix_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 7 -->

        <div class="Data_Plate" id="AppsPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Apps > Main Text Input</label>
            <div class="Options_Plate"> <!-- 10 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">App Launcher Button</div>
                <div class="Option_Description_Text">Removes Launcher button (Next to Main Text Input).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Tenth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>

          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Apps > Messages</label>
            <div class="Options_Plate"> <!-- 11 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Edit Image with Apps</div>
                <div class="Option_Description_Text"> Removes App button (displayed on your own picture files, while hovering on them).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Eleventh_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 8 -->

        <div class="Data_Plate" id="VoiceCallPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Voice Call + Fullscreen</label>
            <div class="Options_Plate"> <!-- 4 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Activity Button</div>
                <div class="Option_Description_Text">Removes "Start an Activity" button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fourth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 5 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Sound-Board Button</div>
                <div class="Option_Description_Text">Removes Sound-board button.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fifth_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

        <!-- 9 -->

        <div class="Data_Plate" id="MiscellaneousPage">
          <div class="Options_Holder">
            <label class="title_ed1d57 Remover_PageTitle" style="cursor: auto;"><Symbol-1>&#10140;</Symbol-1> Misc Colours</label>
            <div class="Options_Plate"> <!-- 31 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Add Friend" Button</div>
                <div class="Option_Description_Text">Makes DC-purple the "Add Friend" button (Home Page).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtyone_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 32 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Add Server" Button</div>
                <div class="Option_Description_Text">Makes DC-purple the "Add Server" button (Servers Column).</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Thirtytwo_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 45 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Log Out" Button</div>
                <div class="Option_Description_Text">Makes the "Log Out" button (Inside Settings Column) red.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fortyfive_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>

            <div class="Options_Plate"> <!-- 53 OPTION-->
              <div class="Flex_Plate">
                <div class="Option_Primary_Text">Colour "Delete Channel" Button</div>
                <div class="Option_Description_Text">Makes the "Delete Channel" button (Inside Channel Settings) red.</div>
              </div>
              <div class="Input_Plate">
                <div class="Checkrectangle" id="Fiftythree_Switch" data-value="OFF"><div class="Checkrectangle_Grip"></div></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      </div>
      <!-- Additional Buttons Bar -->
      <div id="Additional_Buttons_Plate">
        <button class="Additional_Button" id="Remover_Exit_Button">Exit Settings</button> <button class="Additional_Button" id="Remover_DCserver_Button" onclick='window.open("https://discord.gg/gj7JFa6mF8", "_blank");' title='Join: "Pillow Fort"'>Remover Discord Server</button> <button class="Additional_Button" id="Remover_GITissuePage_Button" onclick='window.open("https://github.com/Krawette/BetterDiscordPlugins/issues", "_blank");' title="Website: Krawette-GitHub">Remover Github Issue Page</button>
      </div>
    </div>`;

// ============================ //
// "CSS" for The HTML Structure //
// ============================ //
    BdApi.DOM.addStyle("TotalRemoverData", `
      #Remover_Holder
      {
        z-index: 100;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.4);
        backdrop-filter: blur(0px);
        animation: Appear_Holder 0.4s 1 forwards;
      }
      @keyframes Appear_Holder {0% {backdrop-filter: blur(0px);} 100% {backdrop-filter: blur(4px);}}
      #Remover_Plate
      {
        box-sizing: content-box;
        width: 50%;
        min-width: 696px;
        max-width: 750px;
        background-color: var(--background-primary);
        border-radius: var(--radius-sm);
        box-shadow: 0 0 15px var(--background-tertiary);
        animation: Appear_Plate 0.4s 1 forwards;
        transform: rotateX(0deg);
        padding: 15px;
      }
      @keyframes Appear_Plate {0% {transform: rotateX(90deg);} 100% {transform: rotateX(0deg);}}
      /*-------------------------------*/
      /*Remover Settings MENU for Pages*/
      /*-------------------------------*/
      #Remover_Menu_Bar
      {
        opacity: 0;
        overflow-x: auto;
        overflow-y: hidden;
        box-sizing: content-box;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-around;
        gap: 10px;
        scrollbar-width: thin;
        scrollbar-color: var(--background-secondary) var(--background-tertiary);
        background: var(--background-tertiary);
        border-radius: var(--radius-sm);
        scroll-behavior: smooth;
        animation: Appear_Menu_Bar 1.5s 1 forwards;
        padding: 5px;
      }
      @keyframes Appear_Menu_Bar {0% {opacity: 0;} 100% {opacity: 1;}}
      .Remover_Menu_Button
      {
        flex-shrink: 0;
        background: rgba(0,0,0,0);
        color: var(--interactive-normal);
        font-weight: bold;
        border-bottom: solid 3px rgba(0,0,0,0);
        border-radius: var(--radius-sm);
        padding: 4px 8px 4px 8px;
        transition: var(--custom-button-transition-duration)ease;
      }
      .Remover_Menu_Button:hover {background: var(--background-secondary);}
      .Remover_Menu_Button:active {border-color: rgb(128,132,142);}
      /*-----------------------------*/
      /*Remover SETTINGS with options*/
      /*-----------------------------*/
      #Scrollbar_Holder
      {
        overflow-x: hidden;
        overflow-y: auto;
        height: 65vh;
        scrollbar-width: thin;
        scrollbar-color: var(--background-tertiary) var(--background-primary);
      }
      #Data_Holder
      {
        display: flex;
        gap: 15px;
        position: relative;
        left: 0%;
        border-radius: var(--radius-sm);
        transition: left 0.3s ease-out;
      }
      .Data_Plate
      {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        width: 100%;
        height: 0;
        flex-shrink: 0;
      }

      .Remover_PageTitle Symbol-1 {display: inline-block; width: fit-content; transform: rotate(90deg);}
      .Options_Holder
      {
        margin-bottom: 15px;
        background: var(--background-tertiary);
        color: var(--interactive-normal);
        border-radius: var(--radius-sm);
        padding: 5px;
      }
      .Options_Plate
      {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center; gap: 5px;
        background-color: var(--background-secondary);
        border-radius: var(--radius-sm);
        padding: 5px;
      }

      .Flex_Plate
      {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        width: 80%;
        color: var(--interactive-normal);
      }
      .Option_Primary_Text {width: 100%; color: var(--header-primary);}
      .Option_Description_Text {width: 100%; color: var(--header-secondary);}

      .Input_Plate {display: flex; justify-content: center; width: 20%;}
      .Checkrectangle
      {
        box-sizing: content-box;
        display: flex;
        align-items: center;
        width: 40px;
        height: 24px;
        cursor: pointer;
        background: rgb(128,132,142);
        border-radius: var(--radius-sm);
        transition: 0.2s;
      }
      .Checkrectangle_Grip
      {
        position: relative;
        margin: 0 3px 0 3px;
        width: 17px;
        height: 17px;
        background: rgb(255,255,255);
        border-radius: var(--radius-sm);
        transition: left 0.3s ease-out;
      }
      /*------------------------------*/
      /*Additional Buttons Bar SECTION*/
      /*------------------------------*/
      #Additional_Buttons_Plate
      {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        gap 5px;
        height: fit-content;
        background: var(--background-secondary);
        border-radius: var(--radius-sm);
        padding: 5px;
      }
      .Additional_Button
      {
        background: var(--background-tertiary);
        color: var(--interactive-normal);
        font-weight: bold;
        text-shadow: 0 0 4px var(--background-tertiary);
        border-radius: var(--radius-sm);
        padding: 5px 10px 5px 10px;
        transition: var(--custom-button-transition-duration)ease;
      }

      #Remover_Exit_Button {border: solid 1px var(--red-400);}
      #Remover_Exit_Button:hover {background: var(--red-400); color: var(--interactive-active);}

      #Remover_DCserver_Button {border: solid 1px var(--button-filled-brand-background);}
      #Remover_DCserver_Button:hover {background: var(--button-filled-brand-background); color: var(--interactive-active);}

      #Remover_GITissuePage_Button {border: solid 1px var(--yellow-360);}
      #Remover_GITissuePage_Button:hover {background: var(--yellow-360); color: var(--interactive-active);}
    `);

// =================================================== //
// Functionality for HTML (like <script>etc.</script>) //
// =================================================== //
    /*Menu Button clicked Function, for changing its look*/
    const EveryMenuButtonFunction = document.querySelectorAll(".Remover_Menu_Button");
    EveryMenuButtonFunction.forEach(MenuButton =>
    {
      MenuButton.addEventListener('click', () =>
      {
        OptionsPageMoverFunction()
        // Reset style for all buttons.
        EveryMenuButtonFunction.forEach(MenuButtons =>
        {
          MenuButtons.style.borderColor = "";
          MenuButtons.style.borderRadius = "";
          MenuButtons.style.backgroundColor = "";
          MenuButtons.style.cursor = "pointer";
        });
          // Apply style to the clicked button.
          MenuButton.style.borderRadius = "var(--radius-sm) var(--radius-sm) 0 0";
          MenuButton.style.borderColor = "rgb(35,165,90)";
          MenuButton.style.backgroundColor = "var(--background-secondary)";
          MenuButton.style.cursor = "default";
      });
    });

    /*Scroll Horizontally Function on Menubar inside Remover Settings*/
    const Menu_Scrollbar_Horizontal_Function = document.querySelector("#Remover_Menu_Bar");
    Menu_Scrollbar_Horizontal_Function.addEventListener('wheel', (event) =>
    {
      event.preventDefault(); // For safety measurements, disables vertical scroll.
      Menu_Scrollbar_Horizontal_Function.scrollLeft += event.deltaY; // This gives ability to scroll horizontally (On Page Menu).
    });

    /*Menu Function for changing Pages*/
    function OptionsPageMoverFunction(OptionsPageName)
    {
      const RemoverMenuBar = document.querySelector("#Remover_Menu_Bar");
      const DataHolder = document.querySelector("#Data_Holder");
      const AllOptionsPlate = document.querySelectorAll(".Data_Plate");

      AllOptionsPlate.forEach(Plate =>
      {
        Plate.style.height = "0";
      });

      if (RemoverMenuBar.getAttribute("data-value") === "TopbarPage")
      {
        document.querySelector("#TopbarPage").style.height = "fit-content";
        DataHolder.style.left = "0%";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "ServersColumnPage")
      {
        document.querySelector("#ServersColumnPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-100% - 15px)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "HomePage")
      {
        document.querySelector("#HomePage").style.height = "fit-content";
        DataHolder.style.left = "calc(-200% - 15px * 2)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "MessagesPage")
      {
        document.querySelector("#MessagesPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-300% - 15px * 3)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "MainTextInputPage")
      {
        document.querySelector("#MainTextInputPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-400% - 15px * 4)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "SettingsPage")
      {
        document.querySelector("#SettingsPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-500% - 15px * 5)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "AppsPage")
      {
        document.querySelector("#AppsPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-600% - 15px * 6)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "VoiceCallPage")
      {
        document.querySelector("#VoiceCallPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-700% - 15px * 7)";
      }
      if (RemoverMenuBar.getAttribute("data-value") === "MiscellaneousPage")
      {
        document.querySelector("#MiscellaneousPage").style.height = "fit-content";
        DataHolder.style.left = "calc(-800% - 15px * 8)";
      }
    }

// ======================================================================================================================== //
// Detects the click on every switch inside Remover Settings - Changes the switch value and remembers it for bdApi saveData //
// ======================================================================================================================== //
    // 1 OPTION
    const FirstSwitch = document.querySelector("#First_Switch");
    FirstSwitch.addEventListener('click', () =>
    {
      if (FirstSwitch.getAttribute("data-value") === "OFF")
      {
        FirstSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'First_Switch', "ON");
      }
      else if (FirstSwitch.getAttribute("data-value") === "ON")
      {
        FirstSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'First_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 2 OPTION
    const SecondSwitch = document.querySelector("#Second_Switch");
    SecondSwitch.addEventListener('click', () =>
    {
      if (SecondSwitch.getAttribute("data-value") === "OFF")
      {
        SecondSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Second_Switch', "ON");
      }
      else if (SecondSwitch.getAttribute("data-value") === "ON")
      {
        SecondSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Second_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 3 OPTION
    const ThirdSwitch = document.querySelector("#Third_Switch");
    ThirdSwitch.addEventListener('click', () =>
    {
      if (ThirdSwitch.getAttribute("data-value") === "OFF")
      {
        ThirdSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Third_Switch', "ON");
      }
      else if (ThirdSwitch.getAttribute("data-value") === "ON")
      {
        ThirdSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Third_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 4 OPTION
    const FourthSwitch = document.querySelector("#Fourth_Switch");
    FourthSwitch.addEventListener('click', () =>
    {
      if (FourthSwitch.getAttribute("data-value") === "OFF")
      {
        FourthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fourth_Switch', "ON");
      }
      else if (FourthSwitch.getAttribute("data-value") === "ON")
      {
        FourthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fourth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 5 OPTION
    const FifthSwitch = document.querySelector("#Fifth_Switch");
    FifthSwitch.addEventListener('click', () =>
    {
      if (FifthSwitch.getAttribute("data-value") === "OFF")
      {
        FifthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fifth_Switch', "ON");
      }
      else if (FifthSwitch.getAttribute("data-value") === "ON")
      {
        FifthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fifth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 6 OPTION
    const SixthSwitch = document.querySelector("#Sixth_Switch");
    SixthSwitch.addEventListener('click', () =>
    {
      if (SixthSwitch.getAttribute("data-value") === "OFF")
      {
        SixthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Sixth_Switch', "ON");
      }
      else if (SixthSwitch.getAttribute("data-value") === "ON")
      {
        SixthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Sixth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 7 OPTION
    const SeventhSwitch = document.querySelector("#Seventh_Switch");
    SeventhSwitch.addEventListener('click', () =>
    {
      if (SeventhSwitch.getAttribute("data-value") === "OFF")
      {
        SeventhSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Seventh_Switch', "ON");
      }
      else if (SeventhSwitch.getAttribute("data-value") === "ON")
      {
        SeventhSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Seventh_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 8 OPTION
    const EighthSwitch = document.querySelector("#Eighth_Switch");
    EighthSwitch.addEventListener('click', () =>
    {
      if (EighthSwitch.getAttribute("data-value") === "OFF")
      {
        EighthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Eighth_Switch', "ON");
      }
      else if (EighthSwitch.getAttribute("data-value") === "ON")
      {
        EighthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Eighth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 9 OPTION
    const NinthSwitch = document.querySelector("#Ninth_Switch");
    NinthSwitch.addEventListener('click', () =>
    {
      if (NinthSwitch.getAttribute("data-value") === "OFF")
      {
        NinthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Ninth_Switch', "ON");
      }
      else if (NinthSwitch.getAttribute("data-value") === "ON")
      {
        NinthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Ninth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 10 OPTION
    const TenthSwitch = document.querySelector("#Tenth_Switch");
    TenthSwitch.addEventListener('click', () =>
    {
      if (TenthSwitch.getAttribute("data-value") === "OFF")
      {
        TenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Tenth_Switch', "ON");
      }
      else if (TenthSwitch.getAttribute("data-value") === "ON")
      {
        TenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Tenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 11 OPTION
    const EleventhSwitch = document.querySelector("#Eleventh_Switch");
    EleventhSwitch.addEventListener('click', () =>
    {
      if (EleventhSwitch.getAttribute("data-value") === "OFF")
      {
        EleventhSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Eleventh_Switch', "ON");
      }
      else if (EleventhSwitch.getAttribute("data-value") === "ON")
      {
        EleventhSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Eleventh_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 12 OPTION
    const TwelfthSwitch = document.querySelector("#Twelfth_Switch");
    TwelfthSwitch.addEventListener('click', () =>
    {
      if (TwelfthSwitch.getAttribute("data-value") === "OFF")
      {
        TwelfthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twelfth_Switch', "ON");
      }
      else if (TwelfthSwitch.getAttribute("data-value") === "ON")
      {
        TwelfthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twelfth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 13 OPTION
    const ThirteenthSwitch = document.querySelector("#Thirteenth_Switch");
    ThirteenthSwitch.addEventListener('click', () =>
    {
      if (ThirteenthSwitch.getAttribute("data-value") === "OFF")
      {
        ThirteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirteenth_Switch', "ON");
      }
      else if (ThirteenthSwitch.getAttribute("data-value") === "ON")
      {
        ThirteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 14 OPTION
    const FourteenthSwitch = document.querySelector("#Fourteenth_Switch");
    FourteenthSwitch.addEventListener('click', () =>
    {
      if (FourteenthSwitch.getAttribute("data-value") === "OFF")
      {
        FourteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fourteenth_Switch', "ON");
      }
      else if (FourteenthSwitch.getAttribute("data-value") === "ON")
      {
        FourteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fourteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 15 OPTION
    const FifteenthSwitch = document.querySelector("#Fifteenth_Switch");
    FifteenthSwitch.addEventListener('click', () =>
    {
      if (FifteenthSwitch.getAttribute("data-value") === "OFF")
      {
        FifteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fifteenth_Switch', "ON");
      }
      else if (FifteenthSwitch.getAttribute("data-value") === "ON")
      {
        FifteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fifteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 16 OPTION
    const SixteenthSwitch = document.querySelector("#Sixteenth_Switch");
    SixteenthSwitch.addEventListener('click', () =>
    {
      if (SixteenthSwitch.getAttribute("data-value") === "OFF")
      {
        SixteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Sixteenth_Switch', "ON");
      }
      else if (SixteenthSwitch.getAttribute("data-value") === "ON")
      {
        SixteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Sixteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 17 OPTION
    const SeventeenthSwitch = document.querySelector("#Seventeenth_Switch");
    SeventeenthSwitch.addEventListener('click', () =>
    {
      if (SeventeenthSwitch.getAttribute("data-value") === "OFF")
      {
        SeventeenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Seventeenth_Switch', "ON");
      }
      else if (SeventeenthSwitch.getAttribute("data-value") === "ON")
      {
        SeventeenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Seventeenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 18 OPTION
    const EighteenthSwitch = document.querySelector("#Eighteenth_Switch");
    EighteenthSwitch.addEventListener('click', () =>
    {
      if (EighteenthSwitch.getAttribute("data-value") === "OFF")
      {
        EighteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Eighteenth_Switch', "ON");
      }
      else if (EighteenthSwitch.getAttribute("data-value") === "ON")
      {
        EighteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Eighteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 19 OPTION
    const NineteenthSwitch = document.querySelector("#Nineteenth_Switch");
    NineteenthSwitch.addEventListener('click', () =>
    {
      if (NineteenthSwitch.getAttribute("data-value") === "OFF")
      {
        NineteenthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Nineteenth_Switch', "ON");
      }
      else if (NineteenthSwitch.getAttribute("data-value") === "ON")
      {
        NineteenthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Nineteenth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 20 OPTION
    const TwentiethSwitch = document.querySelector("#Twentieth_Switch");
    TwentiethSwitch.addEventListener('click', () =>
    {
      if (TwentiethSwitch.getAttribute("data-value") === "OFF")
      {
        TwentiethSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentieth_Switch', "ON");
      }
      else if (TwentiethSwitch.getAttribute("data-value") === "ON")
      {
        TwentiethSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentieth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 21 OPTION
    const TwentyfirstSwitch = document.querySelector("#Twentyfirst_Switch");
    TwentyfirstSwitch.addEventListener('click', () =>
    {
      if (TwentyfirstSwitch.getAttribute("data-value") === "OFF")
      {
        TwentyfirstSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentyfirst_Switch', "ON");
      }
      else if (TwentyfirstSwitch.getAttribute("data-value") === "ON")
      {
        TwentyfirstSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentyfirst_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 22 OPTION
    const TwentysecondSwitch = document.querySelector("#Twentysecond_Switch");
    TwentysecondSwitch.addEventListener('click', () =>
    {
      if (TwentysecondSwitch.getAttribute("data-value") === "OFF")
      {
        TwentysecondSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentysecond_Switch', "ON");
      }
      else if (TwentysecondSwitch.getAttribute("data-value") === "ON")
      {
        TwentysecondSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentysecond_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 23 OPTION
    const TwentythirdSwitch = document.querySelector("#Twentythird_Switch");
    TwentythirdSwitch.addEventListener('click', () =>
    {
      if (TwentythirdSwitch.getAttribute("data-value") === "OFF")
      {
        TwentythirdSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentythird_Switch', "ON");
      }
      else if (TwentythirdSwitch.getAttribute("data-value") === "ON")
      {
        TwentythirdSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentythird_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 24 OPTION
    const TwentyfourthSwitch = document.querySelector("#Twentyfourth_Switch");
    TwentyfourthSwitch.addEventListener('click', () =>
    {
      if (TwentyfourthSwitch.getAttribute("data-value") === "OFF")
      {
        TwentyfourthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentyfourth_Switch', "ON");
      }
      else if (TwentyfourthSwitch.getAttribute("data-value") === "ON")
      {
        TwentyfourthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentyfourth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 25 OPTION
    const TwentyfifthSwitch = document.querySelector("#Twentyfifth_Switch");
    TwentyfifthSwitch.addEventListener('click', () =>
    {
      if (TwentyfifthSwitch.getAttribute("data-value") === "OFF")
      {
        TwentyfifthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentyfifth_Switch', "ON");
      }
      else if (TwentyfifthSwitch.getAttribute("data-value") === "ON")
      {
        TwentyfifthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentyfifth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 26 OPTION
    const TwentysixthSwitch = document.querySelector("#Twentysixth_Switch");
    TwentysixthSwitch.addEventListener('click', () =>
    {
      if (TwentysixthSwitch.getAttribute("data-value") === "OFF")
      {
        TwentysixthSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentysixth_Switch', "ON");
      }
      else if (TwentysixthSwitch.getAttribute("data-value") === "ON")
      {
        TwentysixthSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentysixth_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 27 OPTION
    const Twentyseven_Switch = document.querySelector("#Twentyseven_Switch");
    Twentyseven_Switch.addEventListener('click', () =>
    {
      if (Twentyseven_Switch.getAttribute("data-value") === "OFF")
      {
        Twentyseven_Switch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentyseven_Switch', "ON");
      }
      else if (Twentyseven_Switch.getAttribute("data-value") === "ON")
      {
        Twentyseven_Switch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentyseven_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 28 OPTION
    const TwentyeightSwitch = document.querySelector("#Twentyeight_Switch");
    TwentyeightSwitch.addEventListener('click', () =>
    {
      if (TwentyeightSwitch.getAttribute("data-value") === "OFF")
      {
        TwentyeightSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentyeight_Switch', "ON");
      }
      else if (TwentyeightSwitch.getAttribute("data-value") === "ON")
      {
        TwentyeightSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentyeight_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 29 OPTION
    const TwentynineSwitch = document.querySelector("#Twentynine_Switch");
    TwentynineSwitch.addEventListener('click', () =>
    {
      if (TwentynineSwitch.getAttribute("data-value") === "OFF")
      {
        TwentynineSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Twentynine_Switch', "ON");
      }
      else if (TwentynineSwitch.getAttribute("data-value") === "ON")
      {
        TwentynineSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Twentynine_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 30 OPTION
    const ThirtySwitch = document.querySelector("#Thirty_Switch");
    ThirtySwitch.addEventListener('click', () =>
    {
      if (ThirtySwitch.getAttribute("data-value") === "OFF")
      {
        ThirtySwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirty_Switch', "ON");
      }
      else if (ThirtySwitch.getAttribute("data-value") === "ON")
      {
        ThirtySwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirty_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 30 OPTION
    const ThirtyoneSwitch = document.querySelector("#Thirtyone_Switch");
    ThirtyoneSwitch.addEventListener('click', () =>
    {
      if (ThirtyoneSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtyoneSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtyone_Switch', "ON");
      }
      else if (ThirtyoneSwitch.getAttribute("data-value") === "ON")
      {
        ThirtyoneSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtyone_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 30 OPTION
    const ThirtytwoSwitch = document.querySelector("#Thirtytwo_Switch");
    ThirtytwoSwitch.addEventListener('click', () =>
    {
      if (ThirtytwoSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtytwoSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtytwo_Switch', "ON");
      }
      else if (ThirtytwoSwitch.getAttribute("data-value") === "ON")
      {
        ThirtytwoSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtytwo_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 33 OPTION
    const ThirtythreeSwitch = document.querySelector("#Thirtythree_Switch");
    ThirtythreeSwitch.addEventListener('click', () =>
    {
      if (ThirtythreeSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtythreeSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtythree_Switch', "ON");
      }
      else if (ThirtythreeSwitch.getAttribute("data-value") === "ON")
      {
        ThirtythreeSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtythree_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 34 OPTION
    const ThirtyfourSwitch = document.querySelector("#Thirtyfour_Switch");
    ThirtyfourSwitch.addEventListener('click', () =>
    {
      if (ThirtyfourSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtyfourSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtyfour_Switch', "ON");
      }
      else if (ThirtyfourSwitch.getAttribute("data-value") === "ON")
      {
        ThirtyfourSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtyfour_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 35 OPTION
    const ThirtyfiveSwitch = document.querySelector("#Thirtyfive_Switch");
    ThirtyfiveSwitch.addEventListener('click', () =>
    {
      if (ThirtyfiveSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtyfiveSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtyfive_Switch', "ON");
      }
      else if (ThirtyfiveSwitch.getAttribute("data-value") === "ON")
      {
        ThirtyfiveSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtyfive_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 36 OPTION
    const ThirtysixSwitch = document.querySelector("#Thirtysix_Switch");
    ThirtysixSwitch.addEventListener('click', () =>
    {
      if (ThirtysixSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtysixSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtysix_Switch', "ON");
      }
      else if (ThirtysixSwitch.getAttribute("data-value") === "ON")
      {
        ThirtysixSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtysix_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 37 OPTION
    const ThirtysevenSwitch = document.querySelector("#Thirtyseven_Switch");
    ThirtysevenSwitch.addEventListener('click', () =>
    {
      if (ThirtysevenSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtysevenSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtyseven_Switch', "ON");
      }
      else if (ThirtysevenSwitch.getAttribute("data-value") === "ON")
      {
        ThirtysevenSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtyseven_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 38 OPTION
    const ThirtyeightSwitch = document.querySelector("#Thirtyeight_Switch");
    ThirtyeightSwitch.addEventListener('click', () =>
    {
      if (ThirtyeightSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtyeightSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtyeight_Switch', "ON");
      }
      else if (ThirtyeightSwitch.getAttribute("data-value") === "ON")
      {
        ThirtyeightSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtyeight_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 39 OPTION
    const ThirtynineSwitch = document.querySelector("#Thirtynine_Switch");
    ThirtynineSwitch.addEventListener('click', () =>
    {
      if (ThirtynineSwitch.getAttribute("data-value") === "OFF")
      {
        ThirtynineSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Thirtynine_Switch', "ON");
      }
      else if (ThirtynineSwitch.getAttribute("data-value") === "ON")
      {
        ThirtynineSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Thirtynine_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 40 OPTION
    const FortySwitch = document.querySelector("#Forty_Switch");
    FortySwitch.addEventListener('click', () =>
    {
      if (FortySwitch.getAttribute("data-value") === "OFF")
      {
        FortySwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Forty_Switch', "ON");
      }
      else if (FortySwitch.getAttribute("data-value") === "ON")
      {
        FortySwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Forty_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 41 OPTION
    const FortyoneSwitch = document.querySelector("#Fortyone_Switch");
    FortyoneSwitch.addEventListener('click', () =>
    {
      if (FortyoneSwitch.getAttribute("data-value") === "OFF")
      {
        FortyoneSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortyone_Switch', "ON");
      }
      else if (FortyoneSwitch.getAttribute("data-value") === "ON")
      {
        FortyoneSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortyone_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 42 OPTION
    const FortytwoSwitch = document.querySelector("#Fortytwo_Switch");
    FortytwoSwitch.addEventListener('click', () =>
    {
      if (FortytwoSwitch.getAttribute("data-value") === "OFF")
      {
        FortytwoSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortytwo_Switch', "ON");
      }
      else if (FortytwoSwitch.getAttribute("data-value") === "ON")
      {
        FortytwoSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortytwo_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 43 OPTION
    const FortythreeSwitch = document.querySelector("#Fortythree_Switch");
    FortythreeSwitch.addEventListener('click', () =>
    {
      if (FortythreeSwitch.getAttribute("data-value") === "OFF")
      {
        FortythreeSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortythree_Switch', "ON");
      }
      else if (FortythreeSwitch.getAttribute("data-value") === "ON")
      {
        FortythreeSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortythree_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 44 OPTION
    const FortyfourSwitch = document.querySelector("#Fortyfour_Switch");
    FortyfourSwitch.addEventListener('click', () =>
    {
      if (FortyfourSwitch.getAttribute("data-value") === "OFF")
      {
        FortyfourSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortyfour_Switch', "ON");
      }
      else if (FortyfourSwitch.getAttribute("data-value") === "ON")
      {
        FortyfourSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortyfour_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 45 OPTION
    const FortyfiveSwitch = document.querySelector("#Fortyfive_Switch");
    FortyfiveSwitch.addEventListener('click', () =>
    {
      if (FortyfiveSwitch.getAttribute("data-value") === "OFF")
      {
        FortyfiveSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortyfive_Switch', "ON");
      }
      else if (FortyfiveSwitch.getAttribute("data-value") === "ON")
      {
        FortyfiveSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortyfive_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 46 OPTION
    const FortysixSwitch = document.querySelector("#Fortysix_Switch");
    FortysixSwitch.addEventListener('click', () =>
    {
      if (FortysixSwitch.getAttribute("data-value") === "OFF")
      {
        FortysixSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortysix_Switch', "ON");
      }
      else if (FortysixSwitch.getAttribute("data-value") === "ON")
      {
        FortysixSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortysix_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 47 OPTION
    const FortysevenSwitch = document.querySelector("#Fortyseven_Switch");
    FortysevenSwitch.addEventListener('click', () =>
    {
      if (FortysevenSwitch.getAttribute("data-value") === "OFF")
      {
        FortysevenSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortyseven_Switch', "ON");
      }
      else if (FortysevenSwitch.getAttribute("data-value") === "ON")
      {
        FortysevenSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortyseven_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 48 OPTION
    const FortyeightSwitch = document.querySelector("#Fortyeight_Switch");
    FortyeightSwitch.addEventListener('click', () =>
    {
      if (FortyeightSwitch.getAttribute("data-value") === "OFF")
      {
        FortyeightSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortyeight_Switch', "ON");
      }
      else if (FortyeightSwitch.getAttribute("data-value") === "ON")
      {
        FortyeightSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortyeight_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 48 OPTION
    const FortynineSwitch = document.querySelector("#Fortynine_Switch");
    FortynineSwitch.addEventListener('click', () =>
    {
      if (FortynineSwitch.getAttribute("data-value") === "OFF")
      {
        FortynineSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fortynine_Switch', "ON");
      }
      else if (FortynineSwitch.getAttribute("data-value") === "ON")
      {
        FortynineSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fortynine_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 50 OPTION
    const FiftySwitch = document.querySelector("#Fifty_Switch");
    FiftySwitch.addEventListener('click', () =>
    {
      if (FiftySwitch.getAttribute("data-value") === "OFF")
      {
        FiftySwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fifty_Switch', "ON");
      }
      else if (FiftySwitch.getAttribute("data-value") === "ON")
      {
        FiftySwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fifty_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 51 OPTION
    const FiftyoneSwitch = document.querySelector("#Fiftyone_Switch");
    FiftyoneSwitch.addEventListener('click', () =>
    {
      if (FiftyoneSwitch.getAttribute("data-value") === "OFF")
      {
        FiftyoneSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fiftyone_Switch', "ON");
      }
      else if (FiftyoneSwitch.getAttribute("data-value") === "ON")
      {
        FiftyoneSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fiftyone_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 52 OPTION
    const FiftytwoSwitch = document.querySelector("#Fiftytwo_Switch");
    FiftytwoSwitch.addEventListener('click', () =>
    {
      if (FiftytwoSwitch.getAttribute("data-value") === "OFF")
      {
        FiftytwoSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fiftytwo_Switch', "ON");
      }
      else if (FiftytwoSwitch.getAttribute("data-value") === "ON")
      {
        FiftytwoSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fiftytwo_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });

    // 53 OPTION
    const FiftythreeSwitch = document.querySelector("#Fiftythree_Switch");
    FiftythreeSwitch.addEventListener('click', () =>
    {
      if (FiftythreeSwitch.getAttribute("data-value") === "OFF")
      {
        FiftythreeSwitch.setAttribute("data-value", "ON");
        BdApi.saveData('TotalRemoverData', 'Fiftythree_Switch', "ON");
      }
      else if (FiftythreeSwitch.getAttribute("data-value") === "ON")
      {
        FiftythreeSwitch.setAttribute("data-value", "OFF");
        BdApi.saveData('TotalRemoverData', 'Fiftythree_Switch', "OFF");
      }
      ValueCheckerStuffChanger();
    });
  }

// ================================================== //
// Downloads data and executes them, per every switch //
// ================================================== //
  function ValueCheckerStuffChanger()
  {
    // Function for checking and executing the switch look for ON and OFF state.
    const Checkrectangle = document.querySelectorAll(".Checkrectangle");
    Checkrectangle.forEach(object =>
    {
      const SwitchCheckValue = object.getAttribute("data-value");
      const CheckRectangleGrip = object.querySelector(".Checkrectangle_Grip")
      if (SwitchCheckValue === "ON")
      {
        object.style.backgroundColor = "rgb(35,165,90)";
        if (CheckRectangleGrip)
        {
          CheckRectangleGrip.style.left = "18px";
        }
      }
      else if (SwitchCheckValue === "OFF")
      {
        object.setAttribute("data-value", "OFF");
        object.style.backgroundColor = "rgb(128,132,142)";
        if (CheckRectangleGrip)
        {
          CheckRectangleGrip.style.left = "0px";
        }
      }
    });

    // The Function for downloading and executing.
    // 1 OPTION
    let FirstSwitchValue = BdApi.loadData('TotalRemoverData', 'First_Switch') || "OFF";
    const FirstSwitch = document.querySelector("#First_Switch");
    if (FirstSwitchValue === "ON")
    {
      if (FirstSwitch) {FirstSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-1", `.search_ff5f90 {order: 1 !important;}`);
    }
    else if (FirstSwitchValue === "OFF")
    {
      if (FirstSwitch) {FirstSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-1");
    }

    // 2 OPTION
    let SecondSwitchValue = BdApi.loadData('TotalRemoverData', 'Second_Switch') || "OFF";
    const SecondSwitch = document.querySelector("#Second_Switch");
    if (SecondSwitchValue === "ON")
    {
      if (SecondSwitch) {SecondSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-2", `[aria-label='Notification Settings' i] {display: none !important;}`);
    }
    else if (SecondSwitchValue === "OFF")
    {
      if (SecondSwitch) {SecondSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-2");
    }

    // 3 OPTION
    let ThirdSwitchValue = BdApi.loadData('TotalRemoverData', 'Third_Switch') || "OFF";
    const ThirdSwitch = document.querySelector("#Third_Switch");
    if (ThirdSwitchValue === "ON")
    {
      if (ThirdSwitch) {ThirdSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-3", `[aria-label='Help' i] {display: none !important;}`);
    }
    else if (ThirdSwitchValue === "OFF")
    {
      if (ThirdSwitch) {ThirdSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-3");
    }

    // 4 OPTION
    let FourthSwitchValue = BdApi.loadData('TotalRemoverData', 'Fourth_Switch') || "OFF";
    const FourthSwitch = document.querySelector("#Fourth_Switch");
    if (FourthSwitchValue === "ON")
    {
      if (FourthSwitch) {FourthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-4", `[aria-label='Start an Activity' i], [aria-label='Play Activities here' i], .wrapper_b6e2f9 .buttonContainer_b6e2f9 {display: none !important;}`);
    }
    else if (FourthSwitchValue === "OFF")
    {
      if (FourthSwitch) {FourthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-4");
    }

    // 5 OPTION
    let FifthSwitchValue = BdApi.loadData('TotalRemoverData', 'Fifth_Switch') || "OFF";
    const FifthSwitch = document.querySelector("#Fifth_Switch");
    if (FifthSwitchValue === "ON")
    {
      if (FifthSwitch) {FifthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-5", `[aria-label='Open Soundboard' i] {display: none !important;}`);
    }
    else if (FifthSwitchValue === "OFF")
    {
      if (FifthSwitch) {FifthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-5");
    }
      if (FourthSwitchValue === "ON" || FifthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-5.1", `.actionButtons_adcaac {display: flex !important;}`);} // <- Additionaly adds flexbox, for filling the empty spaces between buttons.
      else if (FourthSwitchValue === "OFF" && FifthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-5.1", `.actionButtons_adcaac {display: flex !important;}`);}

    // 6 OPTION
    let SixthSwitchValue = BdApi.loadData('TotalRemoverData', 'Sixth_Switch') || "OFF";
    const SixthSwitch = document.querySelector("#Sixth_Switch");
    if (SixthSwitchValue === "ON")
    {
      if (SixthSwitch) {SixthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-6", `[aria-label='Send a gift' i] {display: none !important;}`);
    }
    else if (SixthSwitchValue === "OFF")
    {
      if (SixthSwitch) {SixthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-6");
    }

    // 7 OPTION
    let SeventhSwitchValue = BdApi.loadData('TotalRemoverData', 'Seventh_Switch') || "OFF";
    const SeventhSwitch = document.querySelector("#Seventh_Switch");
    if (SeventhSwitchValue === "ON")
    {
      if (SeventhSwitch) {SeventhSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-7", `[aria-label='Open sticker picker' i] {display: none !important;}`);
    }
    else if (SeventhSwitchValue === "OFF")
    {
      if (SeventhSwitch) {SeventhSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-7");
    }

    // 8 OPTION
    let EighthSwitchValue = BdApi.loadData('TotalRemoverData', 'Eighth_Switch') || "OFF";
    const EighthSwitch = document.querySelector("#Eighth_Switch");
    if (EighthSwitchValue === "ON")
    {
      if (EighthSwitch) {EighthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-8", `#channel-attach-THREAD {display: none !important;}`);
    }
    else if (EighthSwitchValue === "OFF")
    {
      if (EighthSwitch) {EighthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-8");
    }

    // 9 OPTION
    let NinthSwitchValue = BdApi.loadData('TotalRemoverData', 'Ninth_Switch') || "OFF";
    const NinthSwitch = document.querySelector("#Ninth_Switch");
    if (NinthSwitchValue === "ON")
    {
      if (NinthSwitch) {NinthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-9", `[aria-label='Threads' i] {display: none !important;}`);
    }
    else if (NinthSwitchValue === "OFF")
    {
      if (NinthSwitch) {NinthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-9");
    }

    // 10 OPTION
    let TenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Tenth_Switch') || "OFF";
    const TenthSwitch = document.querySelector("#Tenth_Switch");
    if (TenthSwitchValue === "ON")
    {
      if (TenthSwitch) {TenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-10", `.channelAppLauncher_df39bd {display: none !important;}`);
    }
    else if (TenthSwitchValue === "OFF")
    {
      if (TenthSwitch) {TenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-10");
    }

    // 11 OPTION
    let EleventhSwitchValue = BdApi.loadData('TotalRemoverData', 'Eleventh_Switch') || "OFF";
    const EleventhSwitch = document.querySelector("#Eleventh_Switch");
    if (EleventhSwitchValue === "ON")
    {
      if (EleventhSwitch) {EleventhSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-11", `[aria-label="Edit Image with Apps"] {display: none !important;}`);
    }
    else if (EleventhSwitchValue === "OFF")
    {
      if (EleventhSwitch) {EleventhSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-11");
    }

    // 12 OPTION
    let TwelfthSwitchValue = BdApi.loadData('TotalRemoverData', 'Twelfth_Switch') || "OFF";
    const TwelfthSwitch = document.querySelector("#Twelfth_Switch");
    if (TwelfthSwitchValue === "ON")
    {
      if (TwelfthSwitch) {TwelfthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-12", `[aria-label^="Click to react with"], [aria-label="Message Actions"] .popoverReactionHoverBar_e986d9 .separator_e986d9 {display: none !important;}`);
    }
    else if (TwelfthSwitchValue === "OFF")
    {
      if (TwelfthSwitch) {TwelfthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-12");
    }

    // 13 OPTION
    let ThirteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirteenth_Switch') || "OFF";
    const ThirteenthSwitch = document.querySelector("#Thirteenth_Switch");
    if (ThirteenthSwitchValue === "ON")
    {
      if (ThirteenthSwitch) {ThirteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-13", `#message-actions .scroller_d90b3d .wrapper_a24e84 {display: none !important;}`);
    }
    else if (ThirteenthSwitchValue === "OFF")
    {
      if (ThirteenthSwitch) {ThirteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-13");
    }

    // 14 OPTION
    let FourteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Fourteenth_Switch') || "OFF";
    const FourteenthSwitch = document.querySelector("#Fourteenth_Switch");
    if (FourteenthSwitchValue === "ON")
    {
      if (FourteenthSwitch) {FourteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-14", `[aria-label="Forward"] {display: none !important;}`);
    }
    else if (FourteenthSwitchValue === "OFF")
    {
      if (FourteenthSwitch) {FourteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-14");
    }

    // 15 OPTION
    let FifteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Fifteenth_Switch') || "OFF";
    const FifteenthSwitch = document.querySelector("#Fifteenth_Switch");
    if (FifteenthSwitchValue === "ON")
    {
      if (FifteenthSwitch) {FifteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-15", `#message-actions-forward {display: none !important;}`);
    }
    else if (FifteenthSwitchValue === "OFF")
    {
      if (FifteenthSwitch) {FifteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-15");
    }

    // 16 OPTION
    let SixteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Sixteenth_Switch') || "OFF";
    const SixteenthSwitch = document.querySelector("#Sixteenth_Switch");
    if (SixteenthSwitchValue === "ON")
    {
      if (SixteenthSwitch) {SixteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-16", `#message-actions-add-reaction {display: none !important;}`);
    }
    else if (SixteenthSwitchValue === "OFF")
    {
      if (SixteenthSwitch) {SixteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-16");
    }

    // 17 OPTION
    let SeventeenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Seventeenth_Switch') || "OFF";
    const SeventeenthSwitch = document.querySelector("#Seventeenth_Switch");
    if (SeventeenthSwitchValue === "ON")
    {
      if (SeventeenthSwitch) {SeventeenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-17", `#message-actions-edit {display: none !important;}`);
    }
    else if (SeventeenthSwitchValue === "OFF")
    {
      if (SeventeenthSwitch) {SeventeenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-17");
    }

    // 18 OPTION
    let EighteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Eighteenth_Switch') || "OFF";
    const EighteenthSwitch = document.querySelector("#Eighteenth_Switch");
    if (EighteenthSwitchValue === "ON")
    {
      if (EighteenthSwitch) {EighteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-18", `#message-actions-reply {display: none !important;}`);
    }
    else if (EighteenthSwitchValue === "OFF")
    {
      if (EighteenthSwitch) {EighteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-18");
    }

    // 19 OPTION
    let NineteenthSwitchValue = BdApi.loadData('TotalRemoverData', 'Nineteenth_Switch') || "OFF";
    const NineteenthSwitch = document.querySelector("#Nineteenth_Switch");
    if (NineteenthSwitchValue === "ON")
    {
      if (NineteenthSwitch) {NineteenthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-19", `#message-actions-thread {display: none !important;}`);
    }
    else if (NineteenthSwitchValue === "OFF")
    {
      if (NineteenthSwitch) {NineteenthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19");
    }
    if (SeventeenthSwitchValue === "ON" && EighteenthSwitchValue === "ON" && FifteenthSwitchValue === "ON" && NineteenthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-19.1", `[aria-label="Message Actions"] .scroller_d90b3d .separator_d90b3d:nth-of-type(5) {display: none !important;}`);} // <- Additionaly removes separator under these buttons, if all removed.
    else if (SeventeenthSwitchValue === "OFF" || EighteenthSwitchValue === "OFF" || FifteenthSwitchValue === "OFF" || NineteenthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19.1", `[aria-label="Message Actions"] .scroller_d90b3d .separator_d90b3d:nth-of-type(5) {display: none !important;}`);}

    // 20 OPTION
    let TwentiethSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentieth_Switch') || "OFF";
    const TwentiethSwitch = document.querySelector("#Twentieth_Switch");
    if (TwentiethSwitchValue === "ON")
    {
      if (TwentiethSwitch) {TwentiethSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-20", `#message-actions-copy-text {display: none !important;}`);
    }
    else if (TwentiethSwitchValue === "OFF")
    {
      if (TwentiethSwitch) {TwentiethSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-20");
    }

    // 21 OPTION
    let TwentyfirstSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentyfirst_Switch') || "OFF";
    const TwentyfirstSwitch = document.querySelector("#Twentyfirst_Switch");
    if (TwentyfirstSwitchValue === "ON")
    {
      if (TwentyfirstSwitch) {TwentyfirstSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-21", `#message-actions-pin {display: none !important;}`);
    }
    else if (TwentyfirstSwitchValue === "OFF")
    {
      if (TwentyfirstSwitch) {TwentyfirstSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-21");
    }

    // 22 OPTION
    let TwentysecondSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentysecond_Switch') || "OFF";
    const TwentysecondSwitch = document.querySelector("#Twentysecond_Switch");
    if (TwentysecondSwitchValue === "ON")
    {
      if (TwentysecondSwitch) {TwentysecondSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-22", `#message-actions-apps {display: none !important;}`);
    }
    else if (TwentysecondSwitchValue === "OFF")
    {
      if (TwentysecondSwitch) {TwentysecondSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-22");
    }

    // 23 OPTION
    let TwentythirdSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentythird_Switch') || "OFF";
    const TwentythirdSwitch = document.querySelector("#Twentythird_Switch");
    if (TwentythirdSwitchValue === "ON")
    {
      if (TwentythirdSwitch) {TwentythirdSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-23", `#message-actions-mark-unread {display: none !important;}`);
    }
    else if (TwentythirdSwitchValue === "OFF")
    {
      if (TwentythirdSwitch) {TwentythirdSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-23");
    }

    // 24 OPTION
    let TwentyfourthSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentyfourth_Switch') || "OFF";
    const TwentyfourthSwitch = document.querySelector("#Twentyfourth_Switch");
    if (TwentyfourthSwitchValue === "ON")
    {
      if (TwentyfourthSwitch) {TwentyfourthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-24", `#message-actions-copy-link {display: none !important;}`);
    }
    else if (TwentyfourthSwitchValue === "OFF")
    {
      if (TwentyfourthSwitch) {TwentyfourthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-24");
    }

    // 25 OPTION
    let TwentyfifthSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentyfifth_Switch') || "OFF";
    const TwentyfifthSwitch = document.querySelector("#Twentyfifth_Switch");
    if (TwentyfifthSwitchValue === "ON")
    {
      if (TwentyfifthSwitch) {TwentyfifthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-25", `#message-actions-tts {display: none !important;}`);
    }
    else if (TwentyfifthSwitchValue === "OFF")
    {
      if (TwentyfifthSwitch) {TwentyfifthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-25");
    }

    // 26 OPTION
    let TwentysixthSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentysixth_Switch') || "OFF";
    const TwentysixthSwitch = document.querySelector("#Twentysixth_Switch");
    if (TwentysixthSwitchValue === "ON")
    {
      if (TwentysixthSwitch) {TwentysixthSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-26", `#message-actions-reactions {display: none !important;}`);
    }
    else if (TwentysixthSwitchValue === "OFF")
    {
      if (TwentysixthSwitch) {TwentysixthSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-26");
    }
    if (SixteenthSwitchValue === "ON" && TwentysixthSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-19.1", `[aria-label="Message Actions"] .scroller_d90b3d .separator_d90b3d:nth-of-type(3) {display: none !important;}`);} // <- Additionaly removes separator under these buttons, if all removed.
    else if (SixteenthSwitchValue === "OFF" || TwentysixthSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-19.1", `[aria-label="Message Actions"] .scroller_d90b3d .separator_d90b3d:nth-of-type(3) {display: none !important;}`);}

    // 27 OPTION
    let TwentysevenSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentyseven_Switch') || "OFF";
    const TwentysevenSwitch = document.querySelector("#Twentyseven_Switch");
    if (TwentysevenSwitchValue === "ON")
    {
      if (TwentysevenSwitch) {TwentysevenSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-27", `.itemsContainer_fea3ef .footer_d71945 {display: none !important;}`);
    }
    else if (TwentysevenSwitchValue === "OFF")
    {
      if (TwentysevenSwitch) {TwentysevenSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-27");
    }

    // 28 OPTION
    let TwentyeightSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentyeight_Switch') || "OFF";
    const TwentyeightSwitch = document.querySelector("#Twentyeight_Switch");
    if (TwentyeightSwitchValue === "ON")
    {
      if (TwentyeightSwitch) {TwentyeightSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-28", `.friendsButtonContainer_f0963d {display: none !important;}`);
    }
    else if (TwentyeightSwitchValue === "OFF")
    {
      if (TwentyeightSwitch) {TwentyeightSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-28");
    }

    // 29 OPTION
    let TwentynineSwitchValue = BdApi.loadData('TotalRemoverData', 'Twentynine_Switch') || "OFF";
    const TwentynineSwitch = document.querySelector("#Twentynine_Switch");
    if (TwentynineSwitchValue === "ON")
    {
      if (TwentynineSwitch) {TwentynineSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-29", `[aria-label='Direct Messages'] .channel_c91bad:has([href^="/store"]) {display: none !important;}`);
    }
    else if (TwentynineSwitchValue === "OFF")
    {
      if (TwentynineSwitch) {TwentynineSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-29");
    }

    // 30 OPTION
    let ThirtySwitchValue = BdApi.loadData('TotalRemoverData', 'Thirty_Switch') || "OFF";
    const ThirtySwitch = document.querySelector("#Thirty_Switch");
    if (ThirtySwitchValue === "ON")
    {
      if (ThirtySwitch) {ThirtySwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-30", `[aria-label='Direct Messages'] .channel_c91bad:has([href^="/shop"]) {display: none !important;}`);
    }
    else if (ThirtySwitchValue === "OFF")
    {
      if (ThirtySwitch) {ThirtySwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-30");
    }

    // 31 OPTION
    let ThirtyoneSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtyone_Switch') || "OFF";
    const ThirtyoneSwitch = document.querySelector("#Thirtyone_Switch");
    if (ThirtyoneSwitchValue === "ON")
    {
      if (ThirtyoneSwitch) {ThirtyoneSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-31", `.tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c {background: #5865f2; transition: 0.3s;} .tabBar_c2739c .addFriend_c2739c.addFriend_c2739c.addFriend_c2739c:hover {background: #4752c4 !important; transition: 0.4s;}`);
    }
    else if (ThirtyoneSwitchValue === "OFF")
    {
      if (ThirtyoneSwitch) {ThirtyoneSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-31");
    }

    // 32 OPTION
    let ThirtytwoSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtytwo_Switch') || "OFF";
    const ThirtytwoSwitch = document.querySelector("#Thirtytwo_Switch");
    if (ThirtytwoSwitchValue === "ON")
    {
      if (ThirtytwoSwitch) {ThirtytwoSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-32", `[aria-label ="Add a Server" i] svg path {fill: #5865f2;} [aria-label ="Add a Server" i]:hover svg path {fill: var(--white-500) !important;} [aria-label ="Add a Server" i]:hover {background: #4752c4 !important;transition: 0.4s;}`);
    }
    else if (ThirtytwoSwitchValue === "OFF")
    {
      if (ThirtytwoSwitch) {ThirtytwoSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-32");
    }

    // 33 OPTION
    let ThirtythreeSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtythree_Switch') || "OFF";
    const ThirtythreeSwitch = document.querySelector("#Thirtythree_Switch");
    if (ThirtythreeSwitchValue === "ON")
    {
      if (ThirtythreeSwitch) {ThirtythreeSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-33", `.closedFolderIconWrapper_bc7085 {display: none !important;}`);
    }
    else if (ThirtythreeSwitchValue === "OFF")
    {
      if (ThirtythreeSwitch) {ThirtythreeSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-33");
    }

    // 34 OPTION
    let ThirtyfourSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtyfour_Switch') || "OFF";
    const ThirtyfourSwitch = document.querySelector("#Thirtyfour_Switch");
    if (ThirtyfourSwitchValue === "ON")
    {
      if (ThirtyfourSwitch) {ThirtyfourSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-34", `[aria-label="Family Centre" i] {display: none !important;}`);
    }
    else if (ThirtyfourSwitchValue === "OFF")
    {
      if (ThirtyfourSwitch) {ThirtyfourSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-34");
    }

    // 35 OPTION
    let ThirtyfiveSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtyfive_Switch') || "OFF";
    const ThirtyfiveSwitch = document.querySelector("#Thirtyfive_Switch");
    if (ThirtyfiveSwitchValue === "ON")
    {
      if (ThirtyfiveSwitch) {ThirtyfiveSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-35", `[aria-label="Connections" i] {display: none !important;}`);
    }
    else if (ThirtyfiveSwitchValue === "OFF")
    {
      if (ThirtyfiveSwitch) {ThirtyfiveSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-35");
    }

    // 36 OPTION
    let ThirtysixSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtysix_Switch') || "OFF";
    const ThirtysixSwitch = document.querySelector("#Thirtysix_Switch");
    if (ThirtysixSwitchValue === "ON")
    {
      if (ThirtysixSwitch) {ThirtysixSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-36", `[aria-label="Clips" i] {display: none !important;}`);
    }
    else if (ThirtysixSwitchValue === "OFF")
    {
      if (ThirtysixSwitch) {ThirtysixSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-36");
    }

    // 37 OPTION
    let ThirtysevenSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtyseven_Switch') || "OFF";
    const ThirtysevenSwitch = document.querySelector("#Thirtyseven_Switch");
    if (ThirtysevenSwitchValue === "ON")
    {
      if (ThirtysevenSwitch) {ThirtysevenSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-37", `[aria-label="Nitro" i] {display: none !important;}`);
    }
    else if (ThirtysevenSwitchValue === "OFF")
    {
      if (ThirtysevenSwitch) {ThirtysevenSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-37");
    }

    // 38 OPTION
    let ThirtyeightSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtyeight_Switch') || "OFF";
    const ThirtyeightSwitch = document.querySelector("#Thirtyeight_Switch");
    if (ThirtyeightSwitchValue === "ON")
    {
      if (ThirtyeightSwitch) {ThirtyeightSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-38", `.side_a0 .item_a0:nth-child(15) {display: none !important;}`);
    }
    else if (ThirtyeightSwitchValue === "OFF")
    {
      if (ThirtyeightSwitch) {ThirtyeightSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-38");
    }

    // 39 OPTION
    let ThirtynineSwitchValue = BdApi.loadData('TotalRemoverData', 'Thirtynine_Switch') || "OFF";
    const ThirtynineSwitch = document.querySelector("#Thirtynine_Switch");
    if (ThirtynineSwitchValue === "ON")
    {
      if (ThirtynineSwitch) {ThirtynineSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-39", `[aria-label="Subscriptions" i] {display: none !important;}`);
    }
    else if (ThirtynineSwitchValue === "OFF")
    {
      if (ThirtynineSwitch) {ThirtynineSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-39");
    }

    // 40 OPTION
    let FortySwitchValue = BdApi.loadData('TotalRemoverData', 'Forty_Switch') || "OFF";
    const FortySwitch = document.querySelector("#Forty_Switch");
    if (FortySwitchValue === "ON")
    {
      if (FortySwitch) {FortySwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-40", `[aria-label="Gift Inventory" i] {display: none !important;}`);
    }
    else if (FortySwitchValue === "OFF")
    {
      if (FortySwitch) {FortySwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-40");
    }

    // 41 OPTION
    let FortyoneSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortyone_Switch') || "OFF";
    const FortyoneSwitch = document.querySelector("#Fortyone_Switch");
    if (FortyoneSwitchValue === "ON")
    {
      if (FortyoneSwitch) {FortyoneSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-41", `[aria-label="Billing" i] {display: none !important;}`);
    }
    else if (FortyoneSwitchValue === "OFF")
    {
      if (FortyoneSwitch) {FortyoneSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-41");
    }
    if (ThirtysevenSwitchValue === "ON" && ThirtyeightSwitchValue === "ON" && ThirtynineSwitchValue === "ON" && FortySwitchValue === "ON" && FortyoneSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-41.1", `.side_a0 .separator_a0:nth-child(12), .side_a0 .header_a0:nth-child(13) {display: none !important;}`);} // <- Additionaly removes separator under these buttons, if all removed.
    else if (ThirtysevenSwitchValue === "OFF" || ThirtyeightSwitchValue === "OFF" || ThirtynineSwitchValue === "OFF" || FortySwitchValue === "OFF" || FortyoneSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-41.1", `.side_a0 .separator_a0:nth-child(12), .side_a0 .header_a0:nth-child(13) {display: none !important;}`);}

    // 42 OPTION
    let FortytwoSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortytwo_Switch') || "OFF";
    const FortytwoSwitch = document.querySelector("#Fortytwo_Switch");
    if (FortytwoSwitchValue === "ON")
    {
      if (FortytwoSwitch) {FortytwoSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-42", `.side_a0 .socialLinks_c44e94 {display: none !important;}`);
    }
    else if (FortytwoSwitchValue === "OFF")
    {
      if (FortytwoSwitch) {FortytwoSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-42");
    }

    // 43 OPTION
    let FortythreeSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortythree_Switch') || "OFF";
    const FortythreeSwitch = document.querySelector("#Fortythree_Switch");
    if (FortythreeSwitchValue === "ON")
    {
      if (FortythreeSwitch) {FortythreeSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-43", `.container_da1432, .upsellContainer_ad7baa, .premiumFeatureBorder_c6d722, .upsellOverlayContainer_eb49af, .selectionGroup_bde965 {display: none !important;}`);
    }
    else if (FortythreeSwitchValue === "OFF")
    {
      if (FortythreeSwitch) {FortythreeSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-43");
    }

    // 44 OPTION
    let FortyfourSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortyfour_Switch') || "OFF";
    const FortyfourSwitch = document.querySelector("#Fortyfour_Switch");
    if (FortyfourSwitchValue === "ON")
    {
      if (FortyfourSwitch) {FortyfourSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-44", `[aria-label="Merch" i] {display: none !important;}`);
    }
    else if (FortyfourSwitchValue === "OFF")
    {
      if (FortyfourSwitch) {FortyfourSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-44");
    }

    // 45 OPTION
    let FortyfiveSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortyfive_Switch') || "OFF";
    const FortyfiveSwitch = document.querySelector("#Fortyfive_Switch");
    if (FortyfiveSwitchValue === "ON")
    {
      if (FortyfiveSwitch) {FortyfiveSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-45", `[aria-label="Log Out" i] {color: var(--button-danger-background-hover) !important; transition: var(--custom-button-transition-duration) ease;} [aria-label="Log Out" i]:hover {color: var(--button-danger-background) !important; [aria-label="Log Out" i]:active {color: var(--button-danger-background-active) !important;}`);
    }
    else if (FortyfiveSwitchValue === "OFF")
    {
      if (FortyfiveSwitch) {FortyfiveSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-45");
    }

    // 46 OPTION
    let FortysixSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortysix_Switch') || "OFF";
    const FortysixSwitch = document.querySelector("#Fortysix_Switch");
    if (FortysixSwitchValue === "ON")
    {
      if (FortysixSwitch) {FortysixSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-46", `.contentColumn_c25c6d .tabBar_bff66b, .contentColumn_c25c6d .tabBar_d8bb15 {z-index: 50; position: sticky; top: 0px; max-width: 100% !important; background-color: var(--background-primary); padding-top: 16px;}`);
    }
    else if (FortysixSwitchValue === "OFF")
    {
      if (FortysixSwitch) {FortysixSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-46");
    }

    // 47 OPTION
    let FortysevenSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortyseven_Switch') || "OFF";
    const FortysevenSwitch = document.querySelector("#Fortyseven_Switch");
    if (FortysevenSwitchValue === "ON")
    {
      if (FortysevenSwitch) {FortysevenSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-47", `.toolbar_fc4f04 .inviteToolbar_c2739c {display: none !important;}`);
    }
    else if (FortysevenSwitchValue === "OFF")
    {
      if (FortysevenSwitch) {FortysevenSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-47");
    }

    // 48 OPTION
    let FortyeightSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortyeight_Switch') || "OFF";
    const FortyeightSwitch = document.querySelector("#Fortyeight_Switch");
    if (FortyeightSwitchValue === "ON")
    {
      if (FortyeightSwitch) {FortyeightSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-48", `.toolbar_fc4f04 .recentsIcon_ea0547 {display: none !important;}`);
    }
    else if (FortyeightSwitchValue === "OFF")
    {
      if (FortyeightSwitch) {FortyeightSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-48");
    }

    // 49 OPTION
    let FortynineSwitchValue = BdApi.loadData('TotalRemoverData', 'Fortynine_Switch') || "OFF";
    const FortynineSwitch = document.querySelector("#Fortynine_Switch");
    if (FortynineSwitchValue === "ON")
    {
      if (FortynineSwitch) {FortynineSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-49", `[aria-label="Pinned Messages" i] {display: none !important;}`);
    }
    else if (FortynineSwitchValue === "OFF")
    {
      if (FortynineSwitch) {FortynineSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-49");
    }

    // 50 OPTION
    let FiftySwitchValue = BdApi.loadData('TotalRemoverData', 'Fifty_Switch') || "OFF";
    const FiftySwitch = document.querySelector("#Fifty_Switch");
    if (FiftySwitchValue === "ON")
    {
      if (FiftySwitch) {FiftySwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-50", `[aria-label="Hide Member List" i] {display: none !important;}`);
    }
    else if (FiftySwitchValue === "OFF")
    {
      if (FiftySwitch) {FiftySwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-50");
    }

    // 51 OPTION
    let FiftyoneSwitchValue = BdApi.loadData('TotalRemoverData', 'Fiftyone_Switch') || "OFF";
    const FiftyoneSwitch = document.querySelector("#Fiftyone_Switch");
    if (FiftyoneSwitchValue === "ON")
    {
      if (FiftyoneSwitch) {FiftyoneSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-51", `#channel-attach-upload-file {display: none !important;}`);
    }
    else if (FiftyoneSwitchValue === "OFF")
    {
      if (FiftyoneSwitch) {FiftyoneSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-51");
    }

    // 52 OPTION
    let FiftytwoSwitchValue = BdApi.loadData('TotalRemoverData', 'Fiftytwo_Switch') || "OFF";
    const FiftytwoSwitch = document.querySelector("#Fiftytwo_Switch");
    if (FiftytwoSwitchValue === "ON")
    {
      if (FiftytwoSwitch) {FiftytwoSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-52", `#channel-attach-poll {display: none !important;}`);
    }
    else if (FiftytwoSwitchValue === "OFF")
    {
      if (FiftytwoSwitch) {FiftytwoSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-52");
    }
    if (FiftyoneSwitchValue === "ON" && EighthSwitchValue === "ON" && FiftytwoSwitchValue === "ON") {BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-52.1", `.inner_bdf0de .attachWrapper_f298d4:has([aria-label="More message options" i]) {display: none !important;}`);}
    else if (FiftyoneSwitchValue === "OFF" || EighthSwitchValue === "OFF" || FiftytwoSwitchValue === "OFF") {BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-52.1");}

    // 52 OPTION
    let FiftythreeSwitchValue = BdApi.loadData('TotalRemoverData', 'Fiftythree_Switch') || "OFF";
    const FiftythreeSwitch = document.querySelector("#Fiftythree_Switch");
    if (FiftythreeSwitchValue === "ON")
    {
      if (FiftythreeSwitch) {FiftythreeSwitch.setAttribute("data-value", "ON");}
      BdApi.DOM.addStyle("TotalRemoverDataModifierStyle-53", `[aria-label="Delete Channel" i] {color: var(--button-danger-background-hover) !important; transition: var(--custom-button-transition-duration) ease;} [aria-label="Delete Channel" i]:hover {color: var(--button-danger-background) !important; [aria-label="Delete Channel" i]:active {color: var(--button-danger-background-active) !important;}`);
    }
    else if (FiftythreeSwitchValue === "OFF")
    {
      if (FiftythreeSwitch) {FiftythreeSwitch.setAttribute("data-value", "OFF");}
      BdApi.DOM.removeStyle("TotalRemoverDataModifierStyle-53");
    }
  }
};
