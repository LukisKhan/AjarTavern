FROM ruby:2.5.1

COPY . /application

WORKDIR /application

# ENV GEM_HOME="/usr/local/bundle"
# ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH
ENV RAILS_ENV production

# RUN gem install bundler
# RUN gem update --system \
# && gem install bundler

ADD Gemfile /application/Gemfile
ADD Gemfile.lock /application/Gemfile.lock

RUN bundle install --deployment --without development test

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  apt install -y nodejs

ENTRYPOINT ./entrypoint.sh
