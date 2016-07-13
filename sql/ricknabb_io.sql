-- phpMyAdmin SQL Dump
-- version 4.0.10.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 12, 2016 at 06:14 PM
-- Server version: 5.5.45-cll-lve
-- PHP Version: 5.4.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ricknabb_io`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog_comments`
--

CREATE TABLE IF NOT EXISTS `blog_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'The unique id of a blog comment',
  `blog_post_id` int(11) NOT NULL COMMENT 'The id of the blog post this comment belongs to',
  `datetime_created` datetime NOT NULL COMMENT 'The date and time the comment was authored',
  `username` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The username of the comment author',
  `body` varchar(140) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The text body of the comment',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `blog_posts`
--

CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'The unique id of a blog post',
  `title` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The title of the blog post',
  `body_url` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The URL of the body of this blog post',
  `date_created` datetime NOT NULL COMMENT 'The date the post was authored',
  `published` tinyint(1) NOT NULL COMMENT 'Whether or not the post should be publicly visible',
  `author` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The author of the blog post',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `blog_tags`
--

CREATE TABLE IF NOT EXISTS `blog_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'The unique id of a blog tag',
  `title` varchar(255) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL COMMENT 'The text of the tag itself',
  `blog_post_id` int(11) NOT NULL COMMENT 'The id of the blog post this tag belongs to',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
