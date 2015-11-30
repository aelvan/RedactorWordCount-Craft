Redactor Word Count for Craft
===========

Plugin that adds a word count to Redactor fields in Craft.

This plugin requires Craft 2.5+.


Usage
---
Download the code and put it in a folder named **redactorwordcount** in your craft plugins folder. 

Enable the wordcount plugin in the Redactor configuration. 
Here's an example (could be myredactor.json in /craft/config/redactor):

    {
	      "buttons": ["format","bold","italic","lists","link"],
	      "plugins": ["fullscreen", "wordcount"],
	      "toolbarFixedBox": true,
    }

That's it.

 
Todo/plans
---
- Make the label, "Words", translatable.


Changelog
---
### Version 0.3
 - Support for Redactor II and Craft 2.3+
 
### Version 0.2
 - Support for Redactor 10 and Craft 2.3+
 
### Version 0.1
 - Initial public release