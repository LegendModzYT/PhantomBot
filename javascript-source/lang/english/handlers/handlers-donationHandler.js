$.lang.register('donationhandler.donation.new', 'Thank you very much (name) for the donation of (currency)$(amount)!');
$.lang.register('donationhandler.donation.newreward', 'Thank you very much (name) for the donation of (currency)$(amount)! Here are (points) (pointname)!');
$.lang.register('donationhandler.lastdonation.no-donations', 'There are presently no donations.');
$.lang.register('donationhandler.lastdonation.404', 'Cannot find last donation!');
$.lang.register('donationhandler.lastdonation.success', 'The last donation was from (name) in the amount of (currency)$(amount).');
$.lang.register('donationhandler.donations.usage', 'usage: !donations (announce | reward n.n | message | rewardmessage | lastmessage)');
$.lang.register('donationhandler.donations.announce.disable', 'Donations will no longer be announced.');
$.lang.register('donationhandler.donations.announce.enable', 'Donations will be announced.');
$.lang.register('donationhandler.donations.reward.usage', 'usage: !donations reward n.n  Set to 0 to disable');
$.lang.register('donationhandler.donations.reward.success', 'The reward for donations has been set to $1 $2 per whole amount of currency donated.');
$.lang.register('donationhandler.donations.message.usage', 'usage: !donations message [message...] Tags: (name) (amount) (currency)');
$.lang.register('donationhandler.donations.rewardmessage.usage', 'usage: !donations rewardmessage [message...] Tags: (name) (amount) (currency) (points) (pointname)');
$.lang.register('donationhandler.donations.lastmessage.usage', 'usage: !donations lastmessage [message...] Tags: (name) (amount) (currency)');
$.lang.register('donationhandler.donations.message.no-name', 'A (name) tag was not provided, at a minimum provide the (name) tag. Tags: (name) (amount) (currency)');
$.lang.register('donationhandler.donations.rewardmessage.no-name', 'A (name) tag was not provided, at a minimum provide the (name) tag. Tags: (name) (amount) (currency) (points) (pointname)');
$.lang.register('donationhandler.donations.lastmessage.no-name', 'A (name) tag was not provided, at a minimum provide the (name) tag. Tags: (name) (amount) (currency)');
$.lang.register('donationhandler.donations.message.success', 'Updated the message for donations when rewards are disabled.');
$.lang.register('donationhandler.donations.rewardmessage.success', 'Updated the message for donations with rewards enabled.');
$.lang.register('donationhandler.donations.lastmessage.success', 'Updates the message for !lastdonation command.');
