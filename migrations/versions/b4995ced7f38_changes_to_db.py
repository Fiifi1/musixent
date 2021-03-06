"""changes to db

Revision ID: b4995ced7f38
Revises: 744d71a22a58
Create Date: 2021-06-28 00:10:05.158383

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b4995ced7f38'
down_revision = '744d71a22a58'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_sentiment_rating_track_duration', table_name='sentiment_rating')
    op.drop_index('ix_sentiment_rating_track_id', table_name='sentiment_rating')
    op.drop_index('ix_sentiment_rating_track_source', table_name='sentiment_rating')
    op.drop_column('sentiment_rating', 'track_duration')
    op.drop_column('sentiment_rating', 'track_source')
    op.drop_column('sentiment_rating', 'track_id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('sentiment_rating', sa.Column('track_id', mysql.VARCHAR(length=50), nullable=False))
    op.add_column('sentiment_rating', sa.Column('track_source', mysql.VARCHAR(length=30), nullable=True))
    op.add_column('sentiment_rating', sa.Column('track_duration', mysql.FLOAT(), nullable=True))
    op.create_index('ix_sentiment_rating_track_source', 'sentiment_rating', ['track_source'], unique=False)
    op.create_index('ix_sentiment_rating_track_id', 'sentiment_rating', ['track_id'], unique=False)
    op.create_index('ix_sentiment_rating_track_duration', 'sentiment_rating', ['track_duration'], unique=False)
    # ### end Alembic commands ###
