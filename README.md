[![Build Status](https://travis-ci.org/javallone/regexper.png)](https://travis-ci.org/javallone/regexper)

# Regexper

Code for the http://www.regexper.com/ site.

## Contributing

I greatly appreciate any contributions that you may have for the site. Feel free to fork the project and work on any of the reported issues, or let me know about any improvements you think would be beneficial.

When sending pull requests, please keep them focused on a single issue. I would rather deal with a dozen pull requests for a dozen issues with one change each over one pull request fixing a dozen issues. Also, I appreciate tests to be included with feature development, but for minor changes I will probably not put up much of a fuss if they're missing.

### Working with the code

While it is not necessary, I recommend using rbenv for managing your ruby environment.

Once your environment is ready, you can install necessary requirements using bundler:

    bundle install

Finally, either build the site or run a local server using jekyll.

JavaScript tests can be run using:

    rake jasmine:ci

## License

See LICENSE.md file for licensing details.
