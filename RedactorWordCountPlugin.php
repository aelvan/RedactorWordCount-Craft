<?php
namespace Craft;

/**
 * Redactor Styles plugin
 * 
 * 
 * @author André Elvan
 */
class RedactorWordCountPlugin extends BasePlugin
{
	public function getName()
	{
		return 'Redactor Word Count';
	}

	public function getVersion()
	{
		return '0.1';
	}

	public function getDeveloper()
	{
		return 'André Elvan';
	}

	public function getDeveloperUrl()
	{
		return 'http://vaersaagod.no';
	}

	public function init()
	{
		if (craft()->request->isCpRequest())
		{
			craft()->templates->includeCssResource('redactorwordcount/wordcount.css');
			craft()->templates->includeJsResource('redactorwordcount/wordcount.js');
		}
	}

}
